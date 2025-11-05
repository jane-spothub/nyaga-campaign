// src/app/admin/volunteers/page.tsx
"use client";

import { useState } from "react";
import { FaPlus, FaEdit, FaTrash, FaEye, FaPhone, FaEnvelope, FaMapMarkerAlt, FaSearch, FaFilter, FaUser, FaCalendar, FaClock } from 'react-icons/fa';
import AdminLayout from "@/admin/layout";

type VolunteerStatus = "active" | "inactive" | "pending";
type VolunteerRole = "canvasser" | "phone-banker" | "event-staff" | "data-entry" | "coordinator";

interface Volunteer {
    id: number;
    name: string;
    email: string;
    phone: string;
    location: string;
    role: VolunteerRole;
    status: VolunteerStatus;
    hours: number;
    events: number;
    joined: string;
    lastActive: string;
}

export default function AdminVolunteers() {
    const [volunteers, setVolunteers] = useState<Volunteer[]>([
        {
            id: 1,
            name: "John Kamau",
            email: "john.kamau@email.com",
            phone: "+254712345678",
            location: "Marimanti",
            role: "canvasser",
            status: "active",
            hours: 45,
            events: 8,
            joined: "2024-01-15",
            lastActive: "2024-02-20"
        },
        {
            id: 2,
            name: "Mary Wanjiku",
            email: "mary.w@email.com",
            phone: "+254723456789",
            location: "Tharaka",
            role: "phone-banker",
            status: "active",
            hours: 32,
            events: 5,
            joined: "2024-01-20",
            lastActive: "2024-02-18"
        },
        {
            id: 3,
            name: "David Mwangi",
            email: "david.m@email.com",
            phone: "+254734567890",
            location: "Gatunga",
            role: "event-staff",
            status: "pending",
            hours: 0,
            events: 0,
            joined: "2024-02-10",
            lastActive: "2024-02-10"
        },
        {
            id: 4,
            name: "Sarah Nyaguthii",
            email: "sarah.n@email.com",
            phone: "+254745678901",
            location: "Chiakariga",
            role: "coordinator",
            status: "active",
            hours: 68,
            events: 12,
            joined: "2024-01-05",
            lastActive: "2024-02-22"
        }
    ]);

    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState<string>("all");
    const [roleFilter, setRoleFilter] = useState<string>("all");
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [editingVolunteer, setEditingVolunteer] = useState<Volunteer | null>(null);

    const filteredVolunteers = volunteers.filter(volunteer => {
        const matchesSearch = volunteer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            volunteer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            volunteer.location.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === "all" || volunteer.status === statusFilter;
        const matchesRole = roleFilter === "all" || volunteer.role === roleFilter;

        return matchesSearch && matchesStatus && matchesRole;
    });

    const getStatusColor = (status: VolunteerStatus) => {
        switch (status) {
            case "active": return "bg-green-100 text-green-800";
            case "inactive": return "bg-gray-100 text-gray-800";
            case "pending": return "bg-yellow-100 text-yellow-800";
            default: return "bg-gray-100 text-gray-800";
        }
    };

    const getRoleColor = (role: VolunteerRole) => {
        switch (role) {
            case "canvasser": return "bg-blue-100 text-blue-800";
            case "phone-banker": return "bg-purple-100 text-purple-800";
            case "event-staff": return "bg-orange-100 text-orange-800";
            case "data-entry": return "bg-cyan-100 text-cyan-800";
            case "coordinator": return "bg-teal-100 text-teal-800";
            default: return "bg-gray-100 text-gray-800";
        }
    };

    const formatRole = (role: string) => {
        return role.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    };

    return (
        <AdminLayout>
            <div className="space-y-6">
                {/* Page Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-800">Volunteers Management</h1>
                        <p className="text-slate-600">Manage campaign volunteers and their activities</p>
                    </div>
                    <button
                        onClick={() => setShowCreateModal(true)}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-colors mt-4 sm:mt-0"
                    >
                        <FaPlus />
                        Add Volunteer
                    </button>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {[
                        { label: "Total Volunteers", value: volunteers.length.toString(), icon: FaUser, color: "bg-blue-500" },
                        { label: "Active", value: volunteers.filter(v => v.status === "active").length.toString(), icon: FaUser, color: "bg-green-500" },
                        { label: "Pending", value: volunteers.filter(v => v.status === "pending").length.toString(), icon: FaUser, color: "bg-yellow-500" },
                        { label: "Total Hours", value: volunteers.reduce((sum, vol) => sum + vol.hours, 0).toString(), icon: FaClock, color: "bg-purple-500" },
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
                        <div className="relative">
                            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search volunteers..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            />
                        </div>

                        <div>
                            <select
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            >
                                <option value="all">All Status</option>
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                                <option value="pending">Pending</option>
                            </select>
                        </div>

                        <div>
                            <select
                                value={roleFilter}
                                onChange={(e) => setRoleFilter(e.target.value)}
                                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            >
                                <option value="all">All Roles</option>
                                <option value="canvasser">Canvasser</option>
                                <option value="phone-banker">Phone Banker</option>
                                <option value="event-staff">Event Staff</option>
                                <option value="data-entry">Data Entry</option>
                                <option value="coordinator">Coordinator</option>
                            </select>
                        </div>

                        <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-600">
                                {filteredVolunteers.length} volunteers found
                            </span>
                            <FaFilter className="text-slate-400" />
                        </div>
                    </div>
                </div>

                {/* Volunteers Table */}
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="px-6 py-4 border-b border-slate-200">
                        <h3 className="text-lg font-semibold text-slate-800">All Volunteers</h3>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-slate-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                                    Volunteer
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                                    Contact
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                                    Location & Role
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                                    Activity
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200">
                            {filteredVolunteers.map((volunteer) => (
                                <tr key={volunteer.id} className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                                                <FaUser className="text-green-500" />
                                            </div>
                                            <div className="min-w-0">
                                                <div className="font-medium text-slate-800">{volunteer.name}</div>
                                                <div className="text-sm text-slate-500">Joined {volunteer.joined}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2 text-sm text-slate-600">
                                                <FaEnvelope className="text-slate-400 flex-shrink-0" />
                                                <span className="truncate">{volunteer.email}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-slate-600">
                                                <FaPhone className="text-slate-400 flex-shrink-0" />
                                                <span>{volunteer.phone}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-sm text-slate-600">
                                                <FaMapMarkerAlt className="text-slate-400 flex-shrink-0" />
                                                <span>{volunteer.location}</span>
                                            </div>
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRoleColor(volunteer.role)}`}>
                                                    {formatRole(volunteer.role)}
                                                </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2 text-sm">
                                                <FaClock className="text-slate-400" />
                                                <span className="font-medium text-slate-800">{volunteer.hours}</span>
                                                <span className="text-slate-500">hours</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm">
                                                <FaCalendar className="text-slate-400" />
                                                <span className="font-medium text-slate-800">{volunteer.events}</span>
                                                <span className="text-slate-500">events</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(volunteer.status)}`}>
                                                {volunteer.status}
                                            </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <button
                                                className="p-2 text-slate-400 hover:text-blue-500 transition-colors"
                                                title="View Volunteer"
                                            >
                                                <FaEye />
                                            </button>
                                            <button
                                                className="p-2 text-slate-400 hover:text-green-500 transition-colors"
                                                title="Edit Volunteer"
                                                onClick={() => setEditingVolunteer(volunteer)}
                                            >
                                                <FaEdit />
                                            </button>
                                            <button
                                                className="p-2 text-slate-400 hover:text-red-500 transition-colors"
                                                title="Delete Volunteer"
                                            >
                                                <FaTrash />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>

                        {filteredVolunteers.length === 0 && (
                            <div className="text-center py-12">
                                <FaUser className="mx-auto text-slate-300 text-4xl mb-4" />
                                <h3 className="text-lg font-medium text-slate-600 mb-2">No volunteers found</h3>
                                <p className="text-slate-500">Try adjusting your search or filters</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}