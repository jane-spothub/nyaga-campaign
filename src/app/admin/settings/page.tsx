// src/app/admin/settings/page.tsx
"use client";

import { useState } from "react";
import { FaSave, FaBell, FaShieldAlt, FaUserCog, FaPalette, FaDatabase, FaEnvelope, FaGlobe, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import AdminLayout from "@/admin/layout";

interface GeneralSettings {
    siteName: string;
    siteDescription: string;
    adminEmail: string;
    timezone: string;
    dateFormat: string;
    language: string;
}

interface NotificationSettings {
    emailNotifications: boolean;
    newDonationAlerts: boolean;
    newVolunteerAlerts: boolean;
    eventReminders: boolean;
    weeklyReports: boolean;
    smsNotifications: boolean;
}

interface SecuritySettings {
    twoFactorAuth: boolean;
    sessionTimeout: number;
    passwordExpiry: number;
    loginAttempts: number;
    ipWhitelist: string[];
}

interface AppearanceSettings {
    theme: "light" | "dark" | "auto";
    primaryColor: string;
    sidebarStyle: "expanded" | "collapsed";
    fontFamily: string;
    fontSize: string;
}

export default function AdminSettings() {
    const [activeTab, setActiveTab] = useState("general");
    const [saving, setSaving] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    // General Settings
    const [generalSettings, setGeneralSettings] = useState<GeneralSettings>({
        siteName: "Campaign Manager",
        siteDescription: "Political Campaign Management System",
        adminEmail: "admin@campaign.co.ke",
        timezone: "Africa/Nairobi",
        dateFormat: "DD/MM/YYYY",
        language: "en"
    });

    // Notification Settings
    const [notificationSettings, setNotificationSettings] = useState<NotificationSettings>({
        emailNotifications: true,
        newDonationAlerts: true,
        newVolunteerAlerts: true,
        eventReminders: true,
        weeklyReports: false,
        smsNotifications: true
    });

    // Security Settings
    const [securitySettings, setSecuritySettings] = useState<SecuritySettings>({
        twoFactorAuth: true,
        sessionTimeout: 60,
        passwordExpiry: 90,
        loginAttempts: 5,
        ipWhitelist: ["192.168.1.1", "10.0.0.1"]
    });

    // Appearance Settings
    const [appearanceSettings, setAppearanceSettings] = useState<AppearanceSettings>({
        theme: "light",
        primaryColor: "#3b82f6", // blue-500
        sidebarStyle: "expanded",
        fontFamily: "Inter",
        fontSize: "medium"
    });

    // User Profile
    const [userProfile, setUserProfile] = useState({
        fullName: "Admin User",
        email: "admin@campaign.co.ke",
        phone: "+254712345678",
        role: "Super Administrator",
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
    });

    const handleSaveSettings = async () => {
        setSaving(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setSaving(false);
        // In real app, you would make API calls to save settings
    };

    const handleAddIpAddress = (ip: string) => {
        if (ip && !securitySettings.ipWhitelist.includes(ip)) {
            setSecuritySettings(prev => ({
                ...prev,
                ipWhitelist: [...prev.ipWhitelist, ip]
            }));
        }
    };

    const handleRemoveIpAddress = (ip: string) => {
        setSecuritySettings(prev => ({
            ...prev,
            ipWhitelist: prev.ipWhitelist.filter(item => item !== ip)
        }));
    };

    const tabs = [
        { id: "general", name: "General", icon: FaGlobe },
        { id: "profile", name: "Profile", icon: FaUserCog },
        { id: "notifications", name: "Notifications", icon: FaBell },
        { id: "security", name: "Security", icon: FaShieldAlt },
        { id: "appearance", name: "Appearance", icon: FaPalette },
        { id: "advanced", name: "Advanced", icon: FaDatabase }
    ];

    return (
        <AdminLayout>
            <div className="space-y-6">
                {/* Page Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-800">Settings</h1>
                        <p className="text-slate-600">Manage your campaign system preferences</p>
                    </div>
                    <button
                        onClick={handleSaveSettings}
                        disabled={saving}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 disabled:bg-blue-300 transition-colors mt-4 sm:mt-0"
                    >
                        <FaSave className={saving ? "animate-spin" : ""} />
                        {saving ? "Saving..." : "Save Changes"}
                    </button>
                </div>

                <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                    {/* Tabs */}
                    <div className="border-b border-slate-200">
                        <nav className="flex overflow-x-auto">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-2 px-6 py-4 border-b-2 font-medium text-sm transition-colors ${
                                        activeTab === tab.id
                                            ? "border-blue-500 text-blue-600 bg-blue-50"
                                            : "border-transparent text-slate-600 hover:text-slate-800 hover:bg-slate-50"
                                    }`}
                                >
                                    <tab.icon />
                                    {tab.name}
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Tab Content */}
                    <div className="p-6">
                        {/* General Settings */}
                        {activeTab === "general" && (
                            <div className="space-y-6">
                                <h3 className="text-lg font-semibold text-slate-800">General Settings</h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">
                                            Site Name
                                        </label>
                                        <input
                                            type="text"
                                            value={generalSettings.siteName}
                                            onChange={(e) => setGeneralSettings(prev => ({ ...prev, siteName: e.target.value }))}
                                            className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">
                                            Admin Email
                                        </label>
                                        <input
                                            type="email"
                                            value={generalSettings.adminEmail}
                                            onChange={(e) => setGeneralSettings(prev => ({ ...prev, adminEmail: e.target.value }))}
                                            className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">
                                            Timezone
                                        </label>
                                        <select
                                            value={generalSettings.timezone}
                                            onChange={(e) => setGeneralSettings(prev => ({ ...prev, timezone: e.target.value }))}
                                            className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        >
                                            <option value="Africa/Nairobi">East Africa Time (Nairobi)</option>
                                            <option value="UTC">UTC</option>
                                            <option value="America/New_York">Eastern Time (New York)</option>
                                            <option value="Europe/London">Greenwich Mean Time (London)</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">
                                            Date Format
                                        </label>
                                        <select
                                            value={generalSettings.dateFormat}
                                            onChange={(e) => setGeneralSettings(prev => ({ ...prev, dateFormat: e.target.value }))}
                                            className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        >
                                            <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                                            <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                                            <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                                        </select>
                                    </div>

                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-slate-700 mb-2">
                                            Site Description
                                        </label>
                                        <textarea
                                            value={generalSettings.siteDescription}
                                            onChange={(e) => setGeneralSettings(prev => ({ ...prev, siteDescription: e.target.value }))}
                                            rows={3}
                                            className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Profile Settings */}
                        {activeTab === "profile" && (
                            <div className="space-y-6">
                                <h3 className="text-lg font-semibold text-slate-800">Profile Settings</h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            value={userProfile.fullName}
                                            onChange={(e) => setUserProfile(prev => ({ ...prev, fullName: e.target.value }))}
                                            className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            value={userProfile.email}
                                            onChange={(e) => setUserProfile(prev => ({ ...prev, email: e.target.value }))}
                                            className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            value={userProfile.phone}
                                            onChange={(e) => setUserProfile(prev => ({ ...prev, phone: e.target.value }))}
                                            className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">
                                            Role
                                        </label>
                                        <input
                                            type="text"
                                            value={userProfile.role}
                                            disabled
                                            className="w-full px-4 py-2 border border-slate-200 rounded-lg bg-slate-50 text-slate-500"
                                        />
                                    </div>
                                </div>

                                <div className="border-t border-slate-200 pt-6">
                                    <h4 className="text-md font-semibold text-slate-800 mb-4">Change Password</h4>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                                Current Password
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type={showPassword ? "text" : "password"}
                                                    value={userProfile.currentPassword}
                                                    onChange={(e) => setUserProfile(prev => ({ ...prev, currentPassword: e.target.value }))}
                                                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                                                >
                                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                                </button>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                                New Password
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type={showPassword ? "text" : "password"}
                                                    value={userProfile.newPassword}
                                                    onChange={(e) => setUserProfile(prev => ({ ...prev, newPassword: e.target.value }))}
                                                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                                Confirm New Password
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type={showPassword ? "text" : "password"}
                                                    value={userProfile.confirmPassword}
                                                    onChange={(e) => setUserProfile(prev => ({ ...prev, confirmPassword: e.target.value }))}
                                                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Notification Settings */}
                        {activeTab === "notifications" && (
                            <div className="space-y-6">
                                <h3 className="text-lg font-semibold text-slate-800">Notification Settings</h3>

                                <div className="space-y-4">
                                    {[
                                        { key: 'emailNotifications', label: 'Email Notifications', description: 'Receive notifications via email' },
                                        { key: 'newDonationAlerts', label: 'New Donation Alerts', description: 'Get notified when new donations are received' },
                                        { key: 'newVolunteerAlerts', label: 'New Volunteer Alerts', description: 'Get notified when new volunteers register' },
                                        { key: 'eventReminders', label: 'Event Reminders', description: 'Receive reminders for upcoming events' },
                                        { key: 'weeklyReports', label: 'Weekly Reports', description: 'Receive weekly summary reports' },
                                        { key: 'smsNotifications', label: 'SMS Notifications', description: 'Receive important alerts via SMS' },
                                    ].map((item) => (
                                        <div key={item.key} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                                            <div>
                                                <div className="font-medium text-slate-800">{item.label}</div>
                                                <div className="text-sm text-slate-600">{item.description}</div>
                                            </div>
                                            <label className="relative inline-flex items-center cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={notificationSettings[item.key as keyof NotificationSettings] as boolean}
                                                    onChange={(e) => setNotificationSettings(prev => ({ ...prev, [item.key]: e.target.checked }))}
                                                    className="sr-only peer"
                                                />
                                                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Security Settings */}
                        {activeTab === "security" && (
                            <div className="space-y-6">
                                <h3 className="text-lg font-semibold text-slate-800">Security Settings</h3>

                                <div className="space-y-6">
                                    <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                                        <div>
                                            <div className="font-medium text-slate-800">Two-Factor Authentication</div>
                                            <div className="text-sm text-slate-600">Add an extra layer of security to your account</div>
                                        </div>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={securitySettings.twoFactorAuth}
                                                onChange={(e) => setSecuritySettings(prev => ({ ...prev, twoFactorAuth: e.target.checked }))}
                                                className="sr-only peer"
                                            />
                                            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                                        </label>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                                Session Timeout (minutes)
                                            </label>
                                            <input
                                                type="number"
                                                value={securitySettings.sessionTimeout}
                                                onChange={(e) => setSecuritySettings(prev => ({ ...prev, sessionTimeout: parseInt(e.target.value) }))}
                                                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                min="5"
                                                max="480"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                                Password Expiry (days)
                                            </label>
                                            <input
                                                type="number"
                                                value={securitySettings.passwordExpiry}
                                                onChange={(e) => setSecuritySettings(prev => ({ ...prev, passwordExpiry: parseInt(e.target.value) }))}
                                                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                min="1"
                                                max="365"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                                Max Login Attempts
                                            </label>
                                            <input
                                                type="number"
                                                value={securitySettings.loginAttempts}
                                                onChange={(e) => setSecuritySettings(prev => ({ ...prev, loginAttempts: parseInt(e.target.value) }))}
                                                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                min="1"
                                                max="10"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">
                                            IP Address Whitelist
                                        </label>
                                        <div className="space-y-3">
                                            <div className="flex gap-2">
                                                <input
                                                    type="text"
                                                    placeholder="Enter IP address (e.g., 192.168.1.1)"
                                                    className="flex-1 px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                    onKeyPress={(e) => {
                                                        if (e.key === 'Enter') {
                                                            handleAddIpAddress((e.target as HTMLInputElement).value);
                                                            (e.target as HTMLInputElement).value = '';
                                                        }
                                                    }}
                                                />
                                                <button
                                                    type="button"
                                                    className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
                                                    onClick={(e) => {
                                                        const input = e.currentTarget.previousElementSibling as HTMLInputElement;
                                                        handleAddIpAddress(input.value);
                                                        input.value = '';
                                                    }}
                                                >
                                                    Add
                                                </button>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {securitySettings.ipWhitelist.map((ip, index) => (
                                                    <div key={index} className="flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                                        {ip}
                                                        <button
                                                            onClick={() => handleRemoveIpAddress(ip)}
                                                            className="text-blue-600 hover:text-blue-800"
                                                        >
                                                            ×
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Appearance Settings */}
                        {activeTab === "appearance" && (
                            <div className="space-y-6">
                                <h3 className="text-lg font-semibold text-slate-800">Appearance Settings</h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">
                                            Theme
                                        </label>
                                        <select
                                            value={appearanceSettings.theme}
                                            onChange={(e) => setAppearanceSettings(prev => ({ ...prev, theme: e.target.value as any }))}
                                            className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        >
                                            <option value="light">Light</option>
                                            <option value="dark">Dark</option>
                                            <option value="auto">Auto (System)</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">
                                            Primary Color
                                        </label>
                                        <div className="flex items-center gap-3">
                                            <input
                                                type="color"
                                                value={appearanceSettings.primaryColor}
                                                onChange={(e) => setAppearanceSettings(prev => ({ ...prev, primaryColor: e.target.value }))}
                                                className="w-12 h-12 border border-slate-200 rounded-lg cursor-pointer"
                                            />
                                            <span className="text-sm text-slate-600">{appearanceSettings.primaryColor}</span>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">
                                            Sidebar Style
                                        </label>
                                        <select
                                            value={appearanceSettings.sidebarStyle}
                                            onChange={(e) => setAppearanceSettings(prev => ({ ...prev, sidebarStyle: e.target.value as any }))}
                                            className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        >
                                            <option value="expanded">Expanded</option>
                                            <option value="collapsed">Collapsed</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">
                                            Font Family
                                        </label>
                                        <select
                                            value={appearanceSettings.fontFamily}
                                            onChange={(e) => setAppearanceSettings(prev => ({ ...prev, fontFamily: e.target.value }))}
                                            className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        >
                                            <option value="Inter">Inter</option>
                                            <option value="Roboto">Roboto</option>
                                            <option value="Arial">Arial</option>
                                            <option value="Georgia">Georgia</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">
                                            Font Size
                                        </label>
                                        <select
                                            value={appearanceSettings.fontSize}
                                            onChange={(e) => setAppearanceSettings(prev => ({ ...prev, fontSize: e.target.value }))}
                                            className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        >
                                            <option value="small">Small</option>
                                            <option value="medium">Medium</option>
                                            <option value="large">Large</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Advanced Settings */}
                        {activeTab === "advanced" && (
                            <div className="space-y-6">
                                <h3 className="text-lg font-semibold text-slate-800">Advanced Settings</h3>

                                <div className="space-y-4">
                                    <div className="p-4 border border-slate-200 rounded-lg">
                                        <div className="font-medium text-slate-800 mb-2">Data Management</div>
                                        <div className="text-sm text-slate-600 mb-4">Manage your campaign data and exports</div>
                                        <div className="flex gap-3">
                                            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                                                Export Data
                                            </button>
                                            <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors">
                                                Backup Database
                                            </button>
                                        </div>
                                    </div>

                                    <div className="p-4 border border-red-200 rounded-lg bg-red-50">
                                        <div className="font-medium text-red-800 mb-2">Danger Zone</div>
                                        <div className="text-sm text-red-600 mb-4">Irreversible actions that will affect your campaign data</div>
                                        <div className="flex gap-3">
                                            <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
                                                Clear All Data
                                            </button>
                                            <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
                                                Delete Account
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}