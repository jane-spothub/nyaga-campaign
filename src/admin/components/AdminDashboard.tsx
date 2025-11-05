// src/app/admin/components/AdminDashboard.tsx
"use client";

import { FaUsers, FaDonate, FaCalendarAlt, FaEye, FaPlus, FaDownload } from 'react-icons/fa';

export default function AdminDashboard() {
    const stats = [
        {
            title: "Total Volunteers",
            value: "1,247",
            change: "+12%",
            changeType: "positive",
            icon: FaUsers,
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: "Total Donations",
            value: "KES 2.4M",
            change: "+8%",
            changeType: "positive",
            icon: FaDonate,
            color: "from-green-500 to-emerald-500"
        },
        {
            title: "Upcoming Events",
            value: "8",
            change: "+2",
            changeType: "positive",
            icon: FaCalendarAlt,
            color: "from-orange-500 to-red-500"
        },
        {
            title: "Website Visitors",
            value: "8,452",
            change: "-3%",
            changeType: "negative",
            icon: FaEye,
            color: "from-purple-500 to-pink-500"
        }
    ];

    return (
        <div className="space-y-6">
            {/* Welcome Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-6 text-white">
                <h1 className="text-2xl font-bold mb-2">Welcome back</h1>
                <p className="text-blue-100">Here&#39;s what&#39;s happening.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color}`}>
                                <stat.icon className="text-white text-lg" />
                            </div>
                            <span className={`text-sm font-medium ${
                                stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                            }`}>
                                {stat.change}
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-1">{stat.value}</h3>
                        <p className="text-slate-600 text-sm">{stat.title}</p>
                    </div>
                ))}
            </div>

            {/* Add more dashboard content here */}
        </div>
    );
}