// src/components/VolunteerForm.tsx
"use client"; // required for client-side hooks like useForm

import { useForm } from "react-hook-form";
import { supabase } from "../lib/supabaseClient";

type FormData = {
    name: string;
    phone: string;
    id_number: string;
};

export default function VolunteerForm() {
    const { register, handleSubmit, reset } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        const { error } = await supabase.from("volunteers").insert([data]);
        if (!error) {
            alert("Thank you for volunteering!");
            reset();
        } else {
            alert("Failed to submit. Try again.");
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
            <input {...register("name")} placeholder="Full Name" className="p-2 border rounded" required />
            <input {...register("phone")} placeholder="Phone Number" className="p-2 border rounded" required />
            <input {...register("id_number")} placeholder="ID Number" className="p-2 border rounded" required />
            <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
                Submit
            </button>
        </form>
    );
}
