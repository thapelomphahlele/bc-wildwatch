import React, { useState } from "react";
import { ReportPayload } from "./ReportsTable";
import { StatusType } from "../dashboard/Badges";

interface UpdateStatusModalProps {
    report: ReportPayload;
    onClose: () => void;
    onSave: (id: string, newStatus: StatusType) => void;
}

export default function UpdateStatusModal({ report, onClose, onSave }: UpdateStatusModalProps) {
    const [status, setStatus] = useState<StatusType>(report.status);

    const handleSave = () => {
        // this is where the API call to SharePoint goes
        onSave(report.id, status);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-white dark:bg-[#111827] border border-gray-200 dark:border-gray-800 rounded-xl shadow-xl w-full max-w-sm overflow-hidden flex flex-col">

                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-gray-800">
                    <h2 className="text-lg font-semibold text-foreground">Update Status</h2>
                    <button onClick={onClose} className="text-foreground/50 hover:text-foreground transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="p-6">
                    <p className="text-sm text-foreground/70 mb-5">
                        Updating status for <span className="font-semibold text-foreground">{report.reportTitle}</span>.
                    </p>

                    <label htmlFor="statusSelect" className="block text-sm font-medium text-foreground mb-2">New Status</label>
                    <select
                        id="statusSelect"
                        value={status}
                        onChange={(e) => setStatus(e.target.value as StatusType)}
                        className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-[#1f2937] text-sm focus:outline-none focus:ring-2 focus:ring-bc-navy"
                    >
                        <option value="New">New</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Resolved">Resolved</option>
                    </select>
                </div>

                <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-100 dark:border-gray-800 flex justify-end gap-3">
                    <button onClick={onClose} className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
                        Cancel
                    </button>
                    <button onClick={handleSave} className="px-4 py-2 bg-bc-navy text-white text-sm font-medium rounded-lg hover:bg-bc-navy/90 transition-colors shadow-sm">
                        Save Changes
                    </button>
                </div>

            </div>
        </div>
    );
}