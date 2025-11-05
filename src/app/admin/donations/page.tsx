// src/app/admin/donations/page.tsx
"use client";

import { useState } from "react";
import { FaPlus, FaEdit, FaTrash, FaEye, FaSearch, FaFilter, FaDollarSign, FaUser, FaCalendar, FaReceipt } from 'react-icons/fa';
import AdminLayout from "@/admin/layout";

type DonationStatus = "completed" | "pending" | "failed" | "refunded";
type DonationType = "one-time" | "monthly" | "quarterly" | "yearly";
type PaymentMethod = "mpesa" | "card" | "bank-transfer" | "cash";

interface Donation {
    id: number;
    donorName: string;
    donorEmail: string;
    amount: number;
    currency: string;
    type: DonationType;
    status: DonationStatus;
    paymentMethod: PaymentMethod;
    date: string;
    reference: string;
    receiptSent: boolean;
}

export default function AdminDonations() {
    const [donations, setDonations] = useState<Donation[]>([
        {
            id: 1,
            donorName: "John Kamau",
            donorEmail: "john.kamau@email.com",
            amount: 5000,
            currency: "KES",
            type: "one-time",
            status: "completed",
            paymentMethod: "mpesa",
            date: "2024-02-20",
            reference: "MPESA123456",
            receiptSent: true
        },
        {
            id: 2,
            donorName: "Mary Wanjiku",
            donorEmail: "mary.w@email.com",
            amount: 2000,
            currency: "KES",
            type: "monthly",
            status: "completed",
            paymentMethod: "mpesa",
            date: "2024-02-18",
            reference: "MPESA123457",
            receiptSent: true
        },
        {
            id: 3,
            donorName: "David Mwangi",
            donorEmail: "david.m@email.com",
            amount: 10000,
            currency: "KES",
            type: "one-time",
            status: "pending",
            paymentMethod: "bank-transfer",
            date: "2024-02-22",
            reference: "BT789012",
            receiptSent: false
        },
        {
            id: 4,
            donorName: "Sarah Nyaguthii",
            donorEmail: "sarah.n@email.com",
            amount: 1500,
            currency: "KES",
            type: "monthly",
            status: "completed",
            paymentMethod: "mpesa",
            date: "2024-02-15",
            reference: "MPESA123458",
            receiptSent: true
        },
        {
            id: 5,
            donorName: "James Kariuki",
            donorEmail: "james.k@email.com",
            amount: 7500,
            currency: "KES",
            type: "one-time",
            status: "failed",
            paymentMethod: "card",
            date: "2024-02-19",
            reference: "CARD456789",
            receiptSent: false
        }
    ]);

    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState<string>("all");
    const [typeFilter, setTypeFilter] = useState<string>("all");
    const [methodFilter, setMethodFilter] = useState<string>("all");

    const filteredDonations = donations.filter(donation => {
        const matchesSearch = donation.donorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            donation.donorEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
            donation.reference.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === "all" || donation.status === statusFilter;
        const matchesType = typeFilter === "all" || donation.type === typeFilter;
        const matchesMethod = methodFilter === "all" || donation.paymentMethod === methodFilter;

        return matchesSearch && matchesStatus && matchesType && matchesMethod;
    });

    const getStatusColor = (status: DonationStatus) => {
        switch (status) {
            case "completed": return "bg-green-100 text-green-800";
            case "pending": return "bg-yellow-100 text-yellow-800";
            case "failed": return "bg-red-100 text-red-800";
            case "refunded": return "bg-gray-100 text-gray-800";
            default: return "bg-gray-100 text-gray-800";
        }
    };

    const getTypeColor = (type: DonationType) => {
        switch (type) {
            case "one-time": return "bg-blue-100 text-blue-800";
            case "monthly": return "bg-purple-100 text-purple-800";
            case "quarterly": return "bg-orange-100 text-orange-800";
            case "yearly": return "bg-teal-100 text-teal-800";
            default: return "bg-gray-100 text-gray-800";
        }
    };

    const getMethodColor = (method: PaymentMethod) => {
        switch (method) {
            case "mpesa": return "bg-green-100 text-green-800";
            case "card": return "bg-blue-100 text-blue-800";
            case "bank-transfer": return "bg-purple-100 text-purple-800";
            case "cash": return "bg-gray-100 text-gray-800";
            default: return "bg-gray-100 text-gray-800";
        }
    };

    const formatCurrency = (amount: number, currency: string) => {
        return new Intl.NumberFormat('en-KE', {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: 0,
        }).format(amount);
    };

    const formatMethod = (method: string) => {
        return method.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    };

    const totalAmount = donations.reduce((sum, donation) => sum + donation.amount, 0);
    const completedAmount = donations
        .filter(d => d.status === "completed")
        .reduce((sum, donation) => sum + donation.amount, 0);

    return (
        <AdminLayout>
            <div className="space-y-6">
                {/* Page Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-800">Donations Management</h1>
                        <p className="text-slate-600">Track and manage campaign donations</p>
                    </div>
                    <button className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-xl font-semibold hover:bg-purple-600 transition-colors mt-4 sm:mt-0">
                        <FaPlus />
                        Record Donation
                    </button>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {[
                        { label: "Total Donations", value: donations.length.toString(), icon: FaReceipt, color: "bg-blue-500" },
                        { label: "Total Amount", value: formatCurrency(totalAmount, "KES"), icon: FaDollarSign, color: "bg-green-500" },
                        { label: "Completed", value: formatCurrency(completedAmount, "KES"), icon: FaDollarSign, color: "bg-purple-500" },
                        { label: "Pending", value: donations.filter(d => d.status === "pending").length.toString(), icon: FaReceipt, color: "bg-yellow-500" },
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
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                        <div className="relative">
                            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search donations..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            />
                        </div>

                        <div>
                            <select
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            >
                                <option value="all">All Status</option>
                                <option value="completed">Completed</option>
                                <option value="pending">Pending</option>
                                <option value="failed">Failed</option>
                                <option value="refunded">Refunded</option>
                            </select>
                        </div>

                        <div>
                            <select
                                value={typeFilter}
                                onChange={(e) => setTypeFilter(e.target.value)}
                                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            >
                                <option value="all">All Types</option>
                                <option value="one-time">One-time</option>
                                <option value="monthly">Monthly</option>
                                <option value="quarterly">Quarterly</option>
                                <option value="yearly">Yearly</option>
                            </select>
                        </div>

                        <div>
                            <select
                                value={methodFilter}
                                onChange={(e) => setMethodFilter(e.target.value)}
                                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            >
                                <option value="all">All Methods</option>
                                <option value="mpesa">M-Pesa</option>
                                <option value="card">Card</option>
                                <option value="bank-transfer">Bank Transfer</option>
                                <option value="cash">Cash</option>
                            </select>
                        </div>

                        <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-600">
                                {filteredDonations.length} donations found
                            </span>
                            <FaFilter className="text-slate-400" />
                        </div>
                    </div>
                </div>

                {/* Donations Table */}
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="px-6 py-4 border-b border-slate-200">
                        <h3 className="text-lg font-semibold text-slate-800">All Donations</h3>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-slate-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                                    Donor & Reference
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                                    Amount
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                                    Date & Type
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                                    Payment Method
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                                    Status & Receipt
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200">
                            {filteredDonations.map((donation) => (
                                <tr key={donation.id} className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                                                <FaUser className="text-purple-500" />
                                            </div>
                                            <div className="min-w-0">
                                                <div className="font-medium text-slate-800">{donation.donorName}</div>
                                                <div className="text-sm text-slate-500">{donation.donorEmail}</div>
                                                <div className="text-xs text-slate-400 mt-1">{donation.reference}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-lg font-bold text-slate-800">
                                            {formatCurrency(donation.amount, donation.currency)}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2 text-sm text-slate-600">
                                                <FaCalendar className="text-slate-400" />
                                                <span>{donation.date}</span>
                                            </div>
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTypeColor(donation.type)}`}>
                                                    {donation.type}
                                                </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getMethodColor(donation.paymentMethod)}`}>
                                                {formatMethod(donation.paymentMethod)}
                                            </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="space-y-2">
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(donation.status)}`}>
                                                    {donation.status}
                                                </span>
                                            <div className="flex items-center gap-2 text-xs">
                                                <FaReceipt className={donation.receiptSent ? "text-green-500" : "text-slate-400"} />
                                                <span className={donation.receiptSent ? "text-green-600" : "text-slate-500"}>
                                                        {donation.receiptSent ? "Receipt Sent" : "Pending Receipt"}
                                                    </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <button
                                                className="p-2 text-slate-400 hover:text-blue-500 transition-colors"
                                                title="View Donation"
                                            >
                                                <FaEye />
                                            </button>
                                            <button
                                                className="p-2 text-slate-400 hover:text-green-500 transition-colors"
                                                title="Edit Donation"
                                            >
                                                <FaEdit />
                                            </button>
                                            <button
                                                className="p-2 text-slate-400 hover:text-red-500 transition-colors"
                                                title="Delete Donation"
                                            >
                                                <FaTrash />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>

                        {filteredDonations.length === 0 && (
                            <div className="text-center py-12">
                                <FaDollarSign className="mx-auto text-slate-300 text-4xl mb-4" />
                                <h3 className="text-lg font-medium text-slate-600 mb-2">No donations found</h3>
                                <p className="text-slate-500">Try adjusting your search or filters</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}