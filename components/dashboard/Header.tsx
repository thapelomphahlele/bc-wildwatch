import React from "react";
import ProfileDropdown from "./ProfileDropdown";

interface HeaderProps {
    onMenuToggle: () => void;
}

export default function Header({ onMenuToggle }: HeaderProps) {
    return (
        <header className="h-16 bg-white dark:bg-[#111827] border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-4 sm:px-6 z-10">
            <div className="flex items-center gap-4">
                {/* Mobile Hamburger Menu */}
                <button
                    onClick={onMenuToggle}
                    className="md:hidden p-2 -ml-2 text-foreground/70 hover:text-foreground"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <div className="md:hidden text-foreground font-bold text-lg">
                    BC WildWatch
                </div>
            </div>

            <div className="flex items-center gap-4">
                <ProfileDropdown />
            </div>
        </header>
    );
}