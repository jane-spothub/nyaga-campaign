// src/app/admin/layout.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    FaTachometerAlt,
    FaCalendarAlt,
    FaUsers,
    FaDonate,
    FaCog,
    FaBars,
    FaTimes,
    FaSignOutAlt,
    FaBell,
    FaUserCircle,
    FaHome
} from 'react-icons/fa';

export default function AdminLayout({
                                        children,
                                    }: {
    children: React.ReactNode;
}) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const pathname = usePathname();

    const menuItems = [
        { href: "/admin", icon: FaTachometerAlt, label: "Dashboard", badge: null },
        { href: "/admin/events", icon: FaCalendarAlt, label: "Events", badge: 3 },
        { href: "/admin/volunteers", icon: FaUsers, label: "Volunteers", badge: 12 },
        { href: "/admin/donations", icon: FaDonate, label: "Donations", badge: 25 },
        { href: "/admin/settings", icon: FaCog, label: "Settings", badge: null },
    ];

    return (
        <html lang="en">
        <body className="bg-slate-50" data-gramm="false" data-gr-ext-installed="">
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className={`
                        fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out
                        lg:translate-x-0 lg:static lg:inset-0
                        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
                    `}>
                {/* Sidebar Header */}
                <div className="flex items-center justify-between p-6 border-b border-slate-200">
                    <Link href="/admin" className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">JM</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg font-bold text-slate-800">Campaign Admin</span>
                            <span className="text-xs text-slate-500">Tharaka Constituency</span>
                        </div>
                    </Link>
                    <button
                        onClick={() => setSidebarOpen(false)}
                        className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
                    >
                        <FaTimes className="text-slate-600" />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="p-4 space-y-2">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`
                                            flex items-center gap-3 p-3 rounded-xl transition-all duration-200 group relative
                                            ${isActive
                                    ? 'bg-blue-50 text-blue-600 border border-blue-200'
                                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-800'
                                }
                                        `}
                            >
                                <item.icon className={`text-lg ${isActive ? 'text-blue-500' : 'text-slate-400 group-hover:text-slate-600'}`} />
                                <span className="font-medium">{item.label}</span>
                                {item.badge && (
                                    <span className="ml-auto px-2 py-1 text-xs bg-red-500 text-white rounded-full min-w-6 text-center">
                                                {item.badge}
                                            </span>
                                )}
                                {isActive && (
                                    <div className="absolute right-3 w-1 h-6 bg-blue-500 rounded-full"></div>
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* Sidebar Footer */}
                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-200 space-y-2">
                    {/* Back to main site */}
                    <Link
                        href="/"
                        className="flex items-center gap-3 p-3 rounded-xl text-slate-600 hover:bg-slate-100 hover:text-slate-800 transition-colors"
                    >
                        <FaHome className="text-slate-400" />
                        <span className="font-medium">Back to Main Site</span>
                    </Link>

                    {/* User profile */}
                    <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer">
                        <FaUserCircle className="text-2xl text-slate-400" />
                        <div className="flex-1 min-w-0">
                            <div className="font-medium text-slate-800 truncate">Admin User</div>
                            <div className="text-xs text-slate-500 truncate">admin@jmnyaga.co.ke</div>
                        </div>
                        <FaSignOutAlt className="text-slate-400 hover:text-red-500 transition-colors" />
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Top Header */}
                <header className="bg-white shadow-sm border-b border-slate-200">
                    <div className="flex items-center justify-between p-4">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setSidebarOpen(true)}
                                className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
                            >
                                <FaBars className="text-slate-600" />
                            </button>
                            <h1 className="text-xl font-bold text-slate-800">Dashboard</h1>
                        </div>

                        <div className="flex items-center gap-4">
                            <button className="relative p-2 rounded-lg hover:bg-slate-100 transition-colors">
                                <FaBell className="text-slate-600" />
                                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                            </button>
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                <span className="text-white text-sm font-bold">A</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-50">
                    {children}
                </main>
            </div>

            {/* Overlay for mobile */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}
        </div>
        </body>
        </html>
    );
}