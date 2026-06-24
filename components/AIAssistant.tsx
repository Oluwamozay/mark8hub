'use client';

import { useState } from 'react';
import { Bot, Send, X } from 'lucide-react';

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Button */}
      <button
        onClick={togglePanel}
        className="w-14 h-14 bg-[#EA580C] rounded-full shadow-lg flex items-center justify-center text-white hover:bg-[#d04d0a] transition-colors"
        aria-label="Toggle AI Assistant"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Bot className="w-6 h-6" />}
      </button>

      {/* Chat Panel */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 h-96 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-[#1E293B] px-4 py-3">
            <h3 className="text-white font-semibold text-sm">AI Assistant</h3>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            <div className="flex justify-start">
              <div className="bg-slate-100 text-slate-800 rounded-lg rounded-bl-none px-3 py-2 text-sm max-w-[80%]">
                Hello! How can I help you today?
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-slate-100 text-slate-800 rounded-lg rounded-bl-none px-3 py-2 text-sm max-w-[80%]">
                I can assist you with finding products, answering questions, and more!
              </div>
            </div>
          </div>

          {/* Input */}
          <div className="border-t border-slate-200 p-3 flex gap-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 px-3 py-2 bg-slate-100 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#EA580C]"
            />
            <button className="w-9 h-9 bg-[#EA580C] rounded-lg flex items-center justify-center text-white hover:bg-[#d04d0a] transition-colors">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
