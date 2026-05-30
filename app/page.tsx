"use client";

import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8">
      {/* Main Authentication Card */}
      <main className="w-full max-w-md bg-white dark:bg-[#111827] rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800">

        {/* Header Area */}
        <div className="bg-bc-navy p-8 text-center">
          <h1 className="text-3xl font-bold text-white tracking-tight">
            BC WildWatch
          </h1>
          <p className="mt-2 text-bc-stone/80 text-sm font-medium uppercase tracking-wider">
            Hazard Reporting Portal
          </p>
        </div>

        {/* Content Area */}
        <div className="p-8 flex flex-col items-center">

          {/* Warning/Alert Icon */}
          <div className="w-16 h-16 bg-bc-red/10 rounded-full flex items-center justify-center mb-6">
            <svg
              className="w-8 h-8 text-bc-red"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>

          <p className="text-center text-foreground/80 mb-8 text-sm">
            Please sign in with your campus account to report an animal sighting or view the analytics dashboard.
          </p>

          {/* Microsoft Login Button */}
          <button
            onClick={() => signIn("azure-ad", { callbackUrl: "/dashboard" })}
            className="w-full flex items-center justify-center gap-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 text-foreground font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
          >
            <svg className="w-5 h-5" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 0h11v11H10z" fill="#f25022" />
              <path d="M0 0h9v11H0z" fill="#00a4ef" />
              <path d="M10 12h11v9H10z" fill="#ffb900" />
              <path d="M0 12h9v9H0z" fill="#7fba00" />
            </svg>
            Sign in with Microsoft
          </button>

        </div>

        {/* Footer */}
        <div className="bg-gray-50 dark:bg-gray-900/50 p-4 border-t border-gray-100 dark:border-gray-800 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Secure access managed via Microsoft Entra ID.
          </p>
        </div>

      </main>
    </div>
  );
}