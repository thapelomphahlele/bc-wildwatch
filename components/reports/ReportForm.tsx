"use client";
import React from "react";

export default function ReportForm() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Submission logic will connect to Power Automate / SharePoint later
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white dark:bg-[#111827] border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 sm:p-8 space-y-6">

                {/* Title & Location Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="reportTitle" className="block text-sm font-medium text-foreground">Report Title</label>
                        <input
                            type="text"
                            id="reportTitle"
                            placeholder="e.g., Large snake near the cafeteria"
                            className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-[#1f2937] text-sm focus:outline-none focus:ring-2 focus:ring-bc-navy"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="location" className="block text-sm font-medium text-foreground">Specific Location</label>
                        <input
                            type="text"
                            id="location"
                            placeholder="e.g., Block A, Main Walkway"
                            className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-[#1f2937] text-sm focus:outline-none focus:ring-2 focus:ring-bc-navy"
                            required
                        />
                    </div>
                </div>

                {/* Animal Type & Severity Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="animalType" className="block text-sm font-medium text-foreground">Animal Type</label>
                        <select
                            id="animalType"
                            className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-[#1f2937] text-sm focus:outline-none focus:ring-2 focus:ring-bc-navy"
                        >
                            <option value="Snake">Snake</option>
                            <option value="Bee Swarm">Bee Swarm</option>
                            <option value="Dog">Dog</option>
                            <option value="Cockroach">Cockroach</option>
                            <option value="Spider">Spider</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="severity" className="block text-sm font-medium text-foreground">Assessed Severity</label>
                        <select
                            id="severity"
                            className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-[#1f2937] text-sm focus:outline-none focus:ring-2 focus:ring-bc-navy"
                        >
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                            <option value="Critical">Critical</option>
                        </select>
                    </div>
                </div>

                {/* Description */}
                <div className="space-y-2">
                    <label htmlFor="description" className="block text-sm font-medium text-foreground">Detailed Description</label>
                    <textarea
                        id="description"
                        rows={4}
                        placeholder="Please provide any additional details that might help security or facilities management..."
                        className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-[#1f2937] text-sm focus:outline-none focus:ring-2 focus:ring-bc-navy resize-none"
                        required
                    />
                </div>

                {/* Image Upload Zone (Optional) */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-foreground">Upload Image (Optional)</label>
                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-300 dark:border-gray-700 px-6 py-10 hover:bg-gray-50 dark:hover:bg-[#1f2937]/50 transition-colors cursor-pointer">
                        <div className="text-center">
                            <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                            </svg>
                            <div className="mt-4 flex text-sm leading-6 text-gray-600 dark:text-gray-400">
                                <span className="relative rounded-md font-semibold text-bc-navy dark:text-blue-400 focus-within:outline-none focus-within:ring-2 focus-within:ring-bc-navy focus-within:ring-offset-2 hover:underline">
                                    Upload a file
                                </span>
                                <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs leading-5 text-gray-500 dark:text-gray-500">PNG, JPG, GIF up to 10MB</p>
                        </div>
                    </div>
                </div>

            </div>

            {/* Form Actions */}
            <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-800 flex items-center justify-end gap-3">
                <button type="button" className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
                    Cancel
                </button>
                <button type="submit" className="bg-bc-navy hover:bg-bc-navy/90 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm">
                    Submit Report
                </button>
            </div>
        </form>
    );
}