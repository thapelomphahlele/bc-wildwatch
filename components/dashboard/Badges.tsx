import React from "react";

export type StatusType = "New" | "In Progress" | "Resolved";
export type SeverityType = "Low" | "Medium" | "High" | "Critical";

export function StatusBadge({ status }: { status: StatusType }) {
    const styles = {
        "New": "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800/50",
        "In Progress": "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-800/50",
        "Resolved": "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-800/50",
    };

    return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${styles[status]}`}>
            {status}
        </span>
    );
}

export function SeverityBadge({ severity }: { severity: SeverityType }) {
    const styles = {
        "Low": "bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700",
        "Medium": "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-800/50",
        "High": "bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-900/20 dark:text-orange-400 dark:border-orange-800/50",
        "Critical": "bg-bc-red/10 text-bc-red border-bc-red/20 dark:bg-bc-red/20 dark:border-bc-red/30",
    };

    return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-bold border ${styles[severity]}`}>
            {severity}
        </span>
    );
}