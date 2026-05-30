import React from "react";
import { ReportPayload } from "./ReportsTable";
import { SeverityBadge, StatusBadge } from "../dashboard/Badges";

interface ViewReportModalProps {
    report: ReportPayload;
    onClose: () => void;
}

export default function ViewReportModal({ report, onClose }: ViewReportModalProps) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-white dark:bg-[#111827] border border-gray-200 dark:border-gray-800 rounded-xl shadow-xl w-full max-w-lg overflow-hidden flex flex-col">

                {/* Modal Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-gray-800">
                    <h2 className="text-lg font-semibold text-foreground">Report Details</h2>
                    <button onClick={onClose} className="text-foreground/50 hover:text-foreground transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Modal Body */}
                <div className="p-6 space-y-5 overflow-y-auto max-h-[70vh]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-xs font-medium text-foreground/50 mb-1">Report Title</label>
                            <div className="text-sm font-medium text-foreground">{report.reportTitle}</div>
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-foreground/50 mb-1">Status</label>
                            <StatusBadge status={report.status} />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-foreground/50 mb-1">Animal Type</label>
                            <div className="text-sm text-foreground">{report.animalType}</div>
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-foreground/50 mb-1">Severity</label>
                            <SeverityBadge severity={report.severity} />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-foreground/50 mb-1">Location</label>
                            <div className="text-sm text-foreground">{report.location}</div>
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-foreground/50 mb-1">Date Reported</label>
                            <div className="text-sm text-foreground">{report.dateReported}</div>
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-foreground/50 mb-1">Reporter Name</label>
                            <div className="text-sm text-foreground">{report.reporterName}</div>
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-foreground/50 mb-1">System ID</label>
                            <div className="text-xs font-mono text-foreground/60">{report.id}</div>
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-medium text-foreground/50 mb-1">Detailed Description</label>
                        <div className="text-sm text-foreground p-3 bg-gray-50 dark:bg-[#1f2937] rounded-lg border border-gray-200 dark:border-gray-700 min-h-20">
                            {report.description || "No additional description provided by the reporter."}
                        </div>
                    </div>
                </div>

                {/* Modal Footer */}
                <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-100 dark:border-gray-800 flex justify-end">
                    <button onClick={onClose} className="px-5 py-2 bg-bc-navy text-white text-sm font-medium rounded-lg hover:bg-bc-navy/90 transition-colors shadow-sm">
                        Close
                    </button>
                </div>

            </div>
        </div>
    );
}