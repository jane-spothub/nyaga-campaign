"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import {Volunteer} from "@/utils/types";

export default function TestPage() {
    const [tables, setTables] = useState<Volunteer[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase.from("volunteers").select("*");
            if (error) console.error(error);
            else setTables(data);
        };
        fetchData();
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Volunteers</h1>
            <pre>{JSON.stringify(tables, null, 2)}</pre>
        </div>
    );
}
