import React from "react";
import MetricCard from "../../../components/dashboard/MetricCard";

export default function DashboardOverview() {
    // Array payload structure ready for future API fetching
    const metrics = [
        { id: 1, title: "Total Reports", value: 12, trend: "+2", trendLabel: "this week", isAlert: false },
        { id: 2, title: "Active Hazards", value: 3, trend: "Require", trendLabel: "review", isAlert: true },
        { id: 3, title: "Resolved Cases", value: 9, isAlert: false },
    ];

    return (
        <div className="space-y-6 max-w-6xl mx-auto">

            <div>
                <h1 className="text-2xl font-bold tracking-tight text-foreground">Dashboard Overview</h1>
                <p className="text-foreground/60 mt-1">Welcome to the BC WildWatch administrative portal.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {metrics.map((metric) => (
                    <MetricCard
                        key={metric.id}
                        title={metric.title}
                        value={metric.value}
                        trend={metric.trend}
                        trendLabel={metric.trendLabel}
                        isAlert={metric.isAlert}
                    />
                ))}
            </div>

            <div className="h-96 w-full border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-xl flex flex-col items-center justify-center text-foreground/50 bg-gray-50/50 dark:bg-[#111827]/50 mt-6">
                <svg className="w-10 h-10 mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                <p className="font-medium">Power BI Analytics Component</p>
                <p className="text-sm mt-1">Pending API integration</p>
            </div>

        </div>
    );
}