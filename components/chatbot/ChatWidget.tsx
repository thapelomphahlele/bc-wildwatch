"use client";
import React, { useState } from "react";
import { useChat } from "@ai-sdk/react";
import ReactMarkdown from "react-markdown";

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");

    const { messages, status, sendMessage } = useChat();
    const isLoading = status === "submitted" || status === "streaming";

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        sendMessage({ text: input });
        setInput("");
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {isOpen && (
                <div className="bg-white dark:bg-[#111827] w-80 sm:w-96 h-120 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 flex flex-col overflow-hidden mb-4 transition-all">

                    <div className="bg-bc-navy text-white p-4 flex justify-between items-center shrink-0">
                        <div>
                            <h3 className="font-bold text-sm">BC WildWatch Assistant</h3>
                            <p className="text-xs text-white/70">Campus Safety AI</p>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-white/70 hover:text-white transition-colors p-1"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="flex-1 p-4 overflow-y-auto bg-gray-50 dark:bg-gray-900/50 space-y-4">
                        {messages.length === 0 && (
                            <div className="text-center text-foreground/50 text-sm mt-4">
                                <p>Spotted a hazard? Ask me what to do!</p>
                            </div>
                        )}

                        {messages.map(m => (
                            <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[85%] rounded-xl p-3 text-sm ${m.role === 'user'
                                        ? 'bg-bc-navy text-white rounded-br-none'
                                        : 'bg-white dark:bg-gray-800 text-foreground border border-gray-200 dark:border-gray-700 rounded-bl-none shadow-sm'
                                    }`}>
                                    {m.parts.map((part, index) => {
                                        if (part.type === 'text') {
                                            return (
                                                <ReactMarkdown key={index}>
                                                    {part.text}
                                                </ReactMarkdown>
                                            );
                                        }
                                        return null;
                                    })}
                                </div>
                            </div>
                        ))}

                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-white dark:bg-gray-800 text-foreground/50 border border-gray-200 dark:border-gray-700 rounded-xl p-3 text-sm rounded-bl-none shadow-sm flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce"></div>
                                    <div className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                                    <div className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                                </div>
                            </div>
                        )}
                    </div>

                    <form onSubmit={handleSubmit} className="p-3 bg-white dark:bg-[#111827] border-t border-gray-200 dark:border-gray-800 shrink-0">
                        <div className="flex gap-2">
                            <input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Type your safety question..."
                                className="flex-1 px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-[#1f2937] focus:outline-none focus:ring-2 focus:ring-bc-navy text-foreground"
                            />
                            <button
                                type="submit"
                                disabled={isLoading || !input.trim()}
                                className="bg-bc-navy text-white px-3 py-2 rounded-lg hover:bg-bc-navy/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            )}

            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`${isOpen ? 'hidden' : 'flex'} w-14 h-14 bg-bc-navy hover:bg-bc-navy/90 text-white rounded-full items-center justify-center shadow-xl hover:scale-105 transition-all duration-200`}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
            </button>
        </div>
    );
}