"use client";
import React, { useState } from "react";
import ViewReportModal from "./ViewReportModal";
import UpdateStatusModal from "./UpdateStatusModal";
import { SeverityType, StatusType, StatusBadge, SeverityBadge } from "../dashboard/Badges";

export interface ReportPayload {
    id: string;
    reportTitle: string;
    animalType: string;
    location: string;
    severity: SeverityType;
    dateReported: string;
    reporterName: string;
    status: StatusType;
    description?: string;
}

interface ReportsTableProps {
    data: ReportPayload[];
}

export default function ReportsTable({ data }: ReportsTableProps) {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const [selectedReport, setSelectedReport] = useState<ReportPayload | null>(null);
    const [modalType, setModalType] = useState<"view" | "update" | null>(null);

    const openModal = (report: ReportPayload, type: "view" | "update") => {
        setSelectedReport(report);
        setModalType(type);
        setActiveDropdown(null);
    };

    const handleStatusUpdate = (id: string, newStatus: StatusType) => {
        console.log(`Update report ${id} to ${newStatus}`);
        // State lifting logic to parent component will go here later
    };

    const ActionMenu = ({ report }: { report: ReportPayload }) => (
        <div className="relative">
            <button
                onClick={() => setActiveDropdown(activeDropdown === report.id ? null : report.id)}
                className="text-foreground/50 hover:text-foreground transition-colors p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14a2 2 0 100-4 2 2 0 000 4zm-6 0a2 2 0 100-4 2 2 0 000 4zm12 0a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
            </button>

            {activeDropdown === report.id && (
                <>
                    <div className="fixed inset-0 z-10" onClick={() => setActiveDropdown(null)} />
                    <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-[#1f2937] border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-20 py-1 flex flex-col">
                        <button
                            onClick={() => openModal(report, "view")}
                            className="w-full text-left px-4 py-2 text-sm text-foreground/80 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        >
                            View Details
                        </button>
                        <button
                            onClick={() => openModal(report, "update")}
                            className="w-full text-left px-4 py-2 text-sm text-foreground/80 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        >
                            Update Status
                        </button>
                        <div className="border-t border-gray-100 dark:border-gray-700 my-1"></div>
                        <button
                            onClick={() => setActiveDropdown(null)}
                            className="w-full text-left px-4 py-2 text-sm text-bc-red hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors"
                        >
                            Delete Report
                        </button>
                    </div>
                </>
            )}
        </div>
    );

    return (
        <div className="w-full">
            {/* MOBILE VIEW */}
            <div className="md:hidden space-y-4">
                {data.map((report) => (
                    <div key={report.id} className="bg-white dark:bg-[#111827] border border-gray-200 dark:border-gray-800 rounded-xl p-4 shadow-sm flex flex-col gap-3">
                        <div className="flex justify-between items-start">
                            <div className="pr-4">
                                <h3 className="font-semibold text-foreground text-sm">{report.reportTitle}</h3>
                                <p className="text-xs text-foreground/60 mt-0.5">{report.animalType} &bull; {report.location}</p>
                            </div>
                            <div className="flex flex-col items-end gap-2">
                                <ActionMenu report={report} />
                                <StatusBadge status={report.status} />
                            </div>
                        </div>

                        <div className="flex justify-between items-center pt-3 border-t border-gray-100 dark:border-gray-800">
                            <div className="flex flex-col gap-1">
                                <span className="text-xs text-foreground/50">Severity</span>
                                <SeverityBadge severity={report.severity} />
                            </div>
                            <div className="flex flex-col gap-1 items-end">
                                <span className="text-xs text-foreground/50">{report.dateReported}</span>
                                <span className="text-xs font-medium text-foreground/80">{report.reporterName}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* DESKTOP VIEW */}
            <div className="hidden md:block bg-white dark:bg-[#111827] border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm">
                <table className="w-full text-left text-sm whitespace-nowrap">
                    <thead className="bg-gray-50 dark:bg-gray-800/50 text-foreground/70 border-b border-gray-200 dark:border-gray-800">
                        <tr>
                            <th className="px-6 py-3 font-medium">Report Title</th>
                            <th className="px-6 py-3 font-medium">Animal / Location</th>
                            <th className="px-6 py-3 font-medium">Severity</th>
                            <th className="px-6 py-3 font-medium">Date / Reporter</th>
                            <th className="px-6 py-3 font-medium">Status</th>
                            <th className="px-6 py-3 font-medium text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                        {data.map((report) => (
                            <tr key={report.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/20 transition-colors">
                                <td className="px-6 py-4 font-medium text-foreground">{report.reportTitle}</td>
                                <td className="px-6 py-4">
                                    <div className="text-foreground/80">{report.animalType}</div>
                                    <div className="text-xs text-foreground/50">{report.location}</div>
                                </td>
                                <td className="px-6 py-4">
                                    <SeverityBadge severity={report.severity} />
                                </td>
                                <td className="px-6 py-4">
                                    <div className="text-foreground/80">{report.dateReported}</div>
                                    <div className="text-xs text-foreground/50">{report.reporterName}</div>
                                </td>
                                <td className="px-6 py-4">
                                    <StatusBadge status={report.status} />
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <ActionMenu report={report} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Render Modals */}
            {modalType === "view" && selectedReport && (
                <ViewReportModal
                    report={selectedReport}
                    onClose={() => setModalType(null)}
                />
            )}

            {modalType === "update" && selectedReport && (
                <UpdateStatusModal
                    report={selectedReport}
                    onClose={() => setModalType(null)}
                    onSave={handleStatusUpdate}
                />
            )}
        </div>
    );
}