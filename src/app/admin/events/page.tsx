// src/app/admin/events/page.tsx
"use client";

import { useState } from "react";
import { FaPlus, FaEdit, FaTrash, FaEye, FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaSearch, FaFilter } from 'react-icons/fa';
import AdminLayout from "@/admin/layout";

type EventStatus = "upcoming" | "ongoing" | "completed" | "cancelled";
type EventType = "town-hall" | "rally" | "meeting" | "forum" | "launch";

interface Event {
    id: number;
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    attendees: number;
    maxAttendees: number;
    status: EventStatus;
    type: EventType;
    created: string;
}

interface EventFormData {
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    attendees: number;
    maxAttendees: number;
    status: EventStatus;
    type: EventType;
}

export default function AdminEvents() {
    const [events, setEvents] = useState<Event[]>([
        {
            id: 1,
            title: "Town Hall Meeting - Marimanti",
            description: "Community discussion on development projects",
            date: "2024-02-15",
            time: "10:00 AM",
            location: "Marimanti Grounds",
            attendees: 150,
            maxAttendees: 200,
            status: "upcoming",
            type: "town-hall",
            created: "2024-01-20"
        },
        {
            id: 2,
            title: "Youth Empowerment Forum",
            description: "Engaging youth in leadership and development",
            date: "2024-02-18",
            time: "2:00 PM",
            location: "Tharaka Technical Institute",
            attendees: 80,
            maxAttendees: 150,
            status: "upcoming",
            type: "forum",
            created: "2024-01-22"
        },
        {
            id: 3,
            title: "Community Development Launch",
            description: "Launch of new water project in Gatunga",
            date: "2024-02-10",
            time: "9:00 AM",
            location: "Gatunga Market",
            attendees: 200,
            maxAttendees: 250,
            status: "completed",
            type: "launch",
            created: "2024-01-15"
        },
        {
            id: 4,
            title: "Campaign Rally - Chiakariga",
            description: "Major campaign rally and public address",
            date: "2024-02-25",
            time: "3:00 PM",
            location: "Chiakariga Centre",
            attendees: 0,
            maxAttendees: 500,
            status: "upcoming",
            type: "rally",
            created: "2024-01-25"
        }
    ]);

    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState<string>("all");
    const [typeFilter, setTypeFilter] = useState<string>("all");
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [editingEvent, setEditingEvent] = useState<Event | null>(null);

    // Filter events based on search and filters
    const filteredEvents = events.filter(event => {
        const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            event.location.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === "all" || event.status === statusFilter;
        const matchesType = typeFilter === "all" || event.type === typeFilter;

        return matchesSearch && matchesStatus && matchesType;
    });

    const handleDeleteEvent = (id: number) => {
        if (window.confirm("Are you sure you want to delete this event?")) {
            setEvents(events.filter(event => event.id !== id));
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case "upcoming": return "bg-blue-100 text-blue-800";
            case "ongoing": return "bg-green-100 text-green-800";
            case "completed": return "bg-gray-100 text-gray-800";
            case "cancelled": return "bg-red-100 text-red-800";
            default: return "bg-gray-100 text-gray-800";
        }
    };

    const getTypeColor = (type: string) => {
        switch (type) {
            case "town-hall": return "bg-purple-100 text-purple-800";
            case "rally": return "bg-orange-100 text-orange-800";
            case "meeting": return "bg-cyan-100 text-cyan-800";
            case "forum": return "bg-pink-100 text-pink-800";
            case "launch": return "bg-teal-100 text-teal-800";
            default: return "bg-gray-100 text-gray-800";
        }
    };

    const formatEventType = (type: string) => {
        return type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    };

    const handleSaveEvent = (eventData: EventFormData) => {
        if (editingEvent) {
            // Update existing event
            const updatedEvent: Event = {
                ...eventData,
                id: editingEvent.id,
                created: editingEvent.created
            };
            setEvents(events.map(e => e.id === editingEvent.id ? updatedEvent : e));
        } else {
            // Create new event
            const newEvent: Event = {
                ...eventData,
                id: Math.max(...events.map(e => e.id)) + 1,
                created: new Date().toISOString().split('T')[0]
            };
            setEvents([...events, newEvent]);
        }
        setShowCreateModal(false);
        setEditingEvent(null);
    };

    return (
        <AdminLayout>
            <div className="space-y-6">
                {/* Page Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-800">Events Management</h1>
                        <p className="text-slate-600">Create and manage campaign events and gatherings</p>
                    </div>
                    <button
                        onClick={() => setShowCreateModal(true)}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition-colors mt-4 sm:mt-0"
                    >
                        <FaPlus />
                        Add New Event
                    </button>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {[
                        { label: "Total Events", value: events.length.toString(), icon: FaCalendarAlt, color: "bg-blue-500" },
                        { label: "Upcoming", value: events.filter(e => e.status === "upcoming").length.toString(), icon: FaCalendarAlt, color: "bg-green-500" },
                        { label: "Completed", value: events.filter(e => e.status === "completed").length.toString(), icon: FaCalendarAlt, color: "bg-gray-500" },
                        { label: "Total Attendees", value: events.reduce((sum, event) => sum + event.attendees, 0).toString(), icon: FaUsers, color: "bg-purple-500" },
                    ].map((stat, index) => (
                        <div key={index} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-slate-600">{stat.label}</p>
                                    <p className="text-2xl font-bold text-slate-800 mt-1">{stat.value}</p>
                                </div>
                                <div className={`p-3 ${stat.color} rounded-xl`}>
                                    <stat.icon className="text-white text-lg" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Filters and Search */}
                <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {/* Search */}
                        <div className="relative">
                            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search events..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        {/* Status Filter */}
                        <div>
                            <select
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                                <option value="all">All Status</option>
                                <option value="upcoming">Upcoming</option>
                                <option value="ongoing">Ongoing</option>
                                <option value="completed">Completed</option>
                                <option value="cancelled">Cancelled</option>
                            </select>
                        </div>

                        {/* Type Filter */}
                        <div>
                            <select
                                value={typeFilter}
                                onChange={(e) => setTypeFilter(e.target.value)}
                                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                                <option value="all">All Types</option>
                                <option value="town-hall">Town Hall</option>
                                <option value="rally">Rally</option>
                                <option value="meeting">Meeting</option>
                                <option value="forum">Forum</option>
                                <option value="launch">Launch</option>
                            </select>
                        </div>

                        {/* Results Count */}
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-600">
                                {filteredEvents.length} events found
                            </span>
                            <FaFilter className="text-slate-400" />
                        </div>
                    </div>
                </div>

                {/* Events Table */}
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="px-6 py-4 border-b border-slate-200">
                        <h3 className="text-lg font-semibold text-slate-800">All Events</h3>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-slate-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                                    Event Details
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                                    Date & Time
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                                    Location
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                                    Attendance
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                                    Status & Type
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200">
                            {filteredEvents.map((event) => (
                                <tr key={event.id} className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                                                <FaCalendarAlt className="text-blue-500" />
                                            </div>
                                            <div className="min-w-0">
                                                <div className="font-medium text-slate-800 truncate">{event.title}</div>
                                                <div className="text-sm text-slate-500 truncate">{event.description}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm font-medium text-slate-800">{event.date}</div>
                                        <div className="text-sm text-slate-500">{event.time}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2 text-sm text-slate-600">
                                            <FaMapMarkerAlt className="text-slate-400 flex-shrink-0" />
                                            <span className="truncate">{event.location}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <FaUsers className="text-slate-400" />
                                            <div>
                                                <span className="text-sm font-medium text-slate-800">{event.attendees}</span>
                                                <span className="text-sm text-slate-500">/{event.maxAttendees}</span>
                                            </div>
                                        </div>
                                        {event.maxAttendees > 0 && (
                                            <div className="w-full bg-slate-200 rounded-full h-2 mt-2">
                                                <div
                                                    className="bg-green-500 h-2 rounded-full"
                                                    style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                                                ></div>
                                            </div>
                                        )}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="space-y-2">
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}>
                                                    {event.status}
                                                </span>
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTypeColor(event.type)}`}>
                                                    {formatEventType(event.type)}
                                                </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <button
                                                className="p-2 text-slate-400 hover:text-blue-500 transition-colors"
                                                title="View Event"
                                            >
                                                <FaEye />
                                            </button>
                                            <button
                                                className="p-2 text-slate-400 hover:text-green-500 transition-colors"
                                                title="Edit Event"
                                                onClick={() => setEditingEvent(event)}
                                            >
                                                <FaEdit />
                                            </button>
                                            <button
                                                className="p-2 text-slate-400 hover:text-red-500 transition-colors"
                                                title="Delete Event"
                                                onClick={() => handleDeleteEvent(event.id)}
                                            >
                                                <FaTrash />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>

                        {filteredEvents.length === 0 && (
                            <div className="text-center py-12">
                                <FaCalendarAlt className="mx-auto text-slate-300 text-4xl mb-4" />
                                <h3 className="text-lg font-medium text-slate-600 mb-2">No events found</h3>
                                <p className="text-slate-500">Try adjusting your search or filters</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Create/Edit Event Modal */}
                {(showCreateModal || editingEvent) && (
                    <EventModal
                        event={editingEvent}
                        onClose={() => {
                            setShowCreateModal(false);
                            setEditingEvent(null);
                        }}
                        onSave={handleSaveEvent}
                    />
                )}
            </div>
        </AdminLayout>
    );
}

// Event Modal Component
function EventModal({ event, onClose, onSave }: {
    event: Event | null;
    onClose: () => void;
    onSave: (eventData: EventFormData) => void;
}) {
    const [formData, setFormData] = useState<EventFormData>({
        title: event?.title || "",
        description: event?.description || "",
        date: event?.date || "",
        time: event?.time || "",
        location: event?.location || "",
        attendees: event?.attendees || 0,
        maxAttendees: event?.maxAttendees || 0,
        status: event?.status || "upcoming",
        type: event?.type || "town-hall"
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(formData);
    };

    const handleInputChange = (field: keyof EventFormData, value: string | number) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSelectChange = (field: keyof EventFormData, value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                <div className="p-6 border-b border-slate-200">
                    <h2 className="text-xl font-bold text-slate-800">
                        {event ? 'Edit Event' : 'Create New Event'}
                    </h2>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                Event Title *
                            </label>
                            <input
                                type="text"
                                required
                                value={formData.title}
                                onChange={(e) => handleInputChange('title', e.target.value)}
                                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Enter event title"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                Event Type *
                            </label>
                            <select
                                required
                                value={formData.type}
                                onChange={(e) => handleSelectChange('type', e.target.value)}
                                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                                <option value="town-hall">Town Hall</option>
                                <option value="rally">Rally</option>
                                <option value="meeting">Meeting</option>
                                <option value="forum">Forum</option>
                                <option value="launch">Launch</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Description *
                        </label>
                        <textarea
                            required
                            value={formData.description}
                            onChange={(e) => handleInputChange('description', e.target.value)}
                            rows={3}
                            className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                            placeholder="Describe the event purpose and agenda"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                Date *
                            </label>
                            <input
                                type="date"
                                required
                                value={formData.date}
                                onChange={(e) => handleInputChange('date', e.target.value)}
                                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                Time *
                            </label>
                            <input
                                type="time"
                                required
                                value={formData.time}
                                onChange={(e) => handleInputChange('time', e.target.value)}
                                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Location *
                        </label>
                        <input
                            type="text"
                            required
                            value={formData.location}
                            onChange={(e) => handleInputChange('location', e.target.value)}
                            className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter event venue"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                Current Attendees
                            </label>
                            <input
                                type="number"
                                value={formData.attendees}
                                onChange={(e) => handleInputChange('attendees', parseInt(e.target.value) || 0)}
                                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                min="0"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                Maximum Attendees
                            </label>
                            <input
                                type="number"
                                value={formData.maxAttendees}
                                onChange={(e) => handleInputChange('maxAttendees', parseInt(e.target.value) || 0)}
                                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                min="0"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                Status *
                            </label>
                            <select
                                required
                                value={formData.status}
                                onChange={(e) => handleSelectChange('status', e.target.value)}
                                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                                <option value="upcoming">Upcoming</option>
                                <option value="ongoing">Ongoing</option>
                                <option value="completed">Completed</option>
                                <option value="cancelled">Cancelled</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex justify-end gap-3 pt-6 border-t border-slate-200">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-6 py-2 text-slate-600 hover:text-slate-800 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                        >
                            {event ? 'Update Event' : 'Create Event'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}