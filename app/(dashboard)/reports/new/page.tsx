import React from "react";
import Link from "next/link";
import ReportForm from "@/components/reports/ReportForm";

export default function NewReportPage() {
    return (
        <div className="max-w-3xl mx-auto space-y-6">

            {/* Navigation & Header */}
            <div>
                <Link
                    href="/reports"
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors mb-4"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Reports
                </Link>
                <h1 className="text-2xl font-bold tracking-tight text-foreground">Report a Sighting</h1>
                <p className="text-foreground/60 mt-1 text-sm">Please provide detailed information about the hazard.</p>
            </div>

            {/* Modular Form Component */}
            <ReportForm />

        </div>
    );
}