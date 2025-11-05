// src/app/admin/page.tsx

import AdminLayout from "@/admin/layout";
import AdminDashboard from "@/admin/components/AdminDashboard";

export default function AdminPage() {
    return (
        <AdminLayout>
            <AdminDashboard />
        </AdminLayout>
    );
}