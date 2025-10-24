// src/app/test/page.tsx
"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import { Volunteer } from "@/utils/types";

export default function TestPage() {
    const [tables, setTables] = useState<Volunteer[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const { data, error } = await supabase.from("volunteers").select("*");
                if (error) {
                    setError(error.message);
                    console.error(error);
                } else {
                    setTables(data || []);
                }
            } catch (err) {
                setError('Failed to fetch data');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen pt-24 flex items-center justify-center">
                <div className="text-lg">Loading...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen pt-24 flex items-center justify-center">
                <div className="text-red-500">Error: {error}</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-[var(--color-background-light)] to-white pt-24 pb-12">
            <div className="container mx-auto px-6 lg:px-8">
                <h1 className="text-2xl font-bold mb-4">Volunteers</h1>
                <pre className="bg-gray-100 p-4 rounded-lg overflow-auto">
                    {JSON.stringify(tables, null, 2)}
                </pre>
            </div>
        </div>
    );
}