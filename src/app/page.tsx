'use client';

import { useState } from 'react';
import ChatUI from '@/components/ChatUI';
import InputBar from '@/components/InputBar';
import Filters from '@/components/Filters';
import GroupModal from '@/components/GroupModal';

export default function Home() {
  const [isGroupModalOpen, setIsGroupModalOpen] = useState(false);

  const handleSendMessage = (message: string) => {
    console.log('Message sent:', message);
    // TODO: Implement message sending logic
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-indigo-600 mb-1">
            Kahit Saan? 📍
          </h1>
          <p className="text-sm text-gray-600">
            AI-powered place recommendations
          </p>
        </div>
        
        {/* Filter Chips */}
        <div className="max-w-4xl mx-auto py-3">
          <Filters />
        </div>
      </header>

      {/* Group Mode Button */}
      <div className="max-w-4xl mx-auto w-full px-4 pt-4">
        <button
          onClick={() => setIsGroupModalOpen(true)}
          className="w-full py-3 bg-white border-2 border-indigo-300 text-indigo-600 rounded-xl font-medium hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2"
        >
          <span>👥</span>
          <span>Start Group Mode</span>
        </button>
      </div>

      {/* Chat UI */}
      <ChatUI />

      {/* Input Bar */}
      <InputBar onSend={handleSendMessage} />

      {/* Group Modal */}
      <GroupModal 
        isOpen={isGroupModalOpen} 
        onClose={() => setIsGroupModalOpen(false)} 
      />
    </div>
  );
}
