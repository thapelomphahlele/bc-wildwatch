"use client";
import React, { useState } from "react";

export default function ProfileDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const initial = "T"; // Hardcoded for now

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-9 h-9 rounded-full bg-bc-red text-white flex items-center justify-center font-bold text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bc-red dark:focus:ring-offset-[#111827]"
            >
                {initial}
            </button>

            {isOpen && (
                <>
                    {/* Invisible backdrop to close dropdown when clicking outside */}
                    <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)}></div>
                    <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-[#1f2937] border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-20 py-1">
                        <div className="px-4 py-2 border-b border-gray-100 dark:border-gray-700">
                            <p className="text-sm font-semibold text-foreground">Thapelo</p>
                            <p className="text-xs text-foreground/60 truncate">thapelo@student.belgiumcampus.ac.za</p>
                        </div>
                        <a href="#" className="block px-4 py-2 text-sm text-foreground/80 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">Profile</a>
                        <a href="#" className="block px-4 py-2 text-sm text-foreground/80 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">Settings</a>
                        <button
                            onClick={() => console.log("Sign out triggered")}
                            className="w-full text-left block px-4 py-2 text-sm text-bc-red hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors"
                        >
                            Sign out
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}