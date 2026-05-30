import ReportsTable, { ReportPayload } from "@/components/reports/ReportsTable";
import Link from "next/link";
import React from "react";

export default function ReportsPage() {
    // Mock data strictly matching the rubric SharePoint columns
    const mockReports: ReportPayload[] = [
        { id: "1", reportTitle: "Snake in Parking Lot", animalType: "Snake", location: "Block A Parking", severity: "High", dateReported: "2026-05-28", reporterName: "Thapelo", status: "New" },
        { id: "2", reportTitle: "Swarm near Cafeteria", animalType: "Bee Swarm", location: "Cafeteria Entrance", severity: "Medium", dateReported: "2026-05-27", reporterName: "System", status: "In Progress" },
        { id: "3", reportTitle: "Stray Dog", animalType: "Dog", location: "Main Walkway", severity: "Low", dateReported: "2026-05-25", reporterName: "Student Admin", status: "Resolved" },
        { id: "4", reportTitle: "Large Spider", animalType: "Spider", location: "Library Restrooms", severity: "Low", dateReported: "2026-05-22", reporterName: "Security", status: "Resolved" },
    ];

    return (
        <div className="space-y-6 max-w-7xl mx-auto">

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-foreground">Hazards & Sightings</h1>
                    <p className="text-foreground/60 mt-1 text-sm">Manage and review all reported incidents on campus.</p>
                </div>
                <Link
                    href="/reports/new" 
                    className="bg-bc-navy hover:bg-bc-navy/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm w-full sm:w-auto">
                    Report Sighting
                </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1 max-w-md">
                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search reports by title or location..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-[#111827] text-sm focus:outline-none focus:ring-2 focus:ring-bc-navy dark:focus:ring-white/20 transition-shadow"
                    />
                </div>
                <select className="border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-[#111827] text-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-bc-navy">
                    <option>All Statuses</option>
                    <option>New</option>
                    <option>In Progress</option>
                    <option>Resolved</option>
                </select>
            </div>

            <ReportsTable data={mockReports} />

        </div>
    );
}