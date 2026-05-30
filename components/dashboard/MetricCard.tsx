import React from "react";

export interface MetricCardProps {
    title: string;
    value: string | number;
    trend?: string;
    trendLabel?: string;
    isAlert?: boolean;
}

export default function MetricCard({ title, value, trend, trendLabel, isAlert }: MetricCardProps) {
    return (
        <div className="bg-white dark:bg-[#111827] p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
            <h3 className="text-sm font-medium text-foreground/70">{title}</h3>
            <div className="mt-2 flex items-baseline gap-2">
                <span className={`text-3xl font-bold ${isAlert ? 'text-bc-red' : 'text-foreground'}`}>
                    {value}
                </span>
                {trend && (
                    <span className={`text-xs font-medium ${isAlert ? 'text-foreground/50' : 'text-emerald-500'}`}>
                        {trend} {trendLabel}
                    </span>
                )}
            </div>
        </div>
    );
}