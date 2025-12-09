'use client';
import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for chatbot functionality
    console.log('Message sent:', message);
    setMessage('');
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-[#FF5007] text-white p-4 rounded-full shadow-lg hover:bg-[#ff6a2e] transition-all duration-300 hover:scale-110 z-50"
        aria-label="Open chatbot"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 flex flex-col">
          {/* Header */}
          <div className="bg-[#FF5007] text-white p-4 rounded-t-2xl">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle size={16} />
              </div>
              <div>
                <h3 className="font-semibold">Propel Assistant</h3>
                <p className="text-xs opacity-90">We're here to help!</p>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                <p className="text-sm text-gray-700">
                  Hello! I'm your Propel assistant. How can I help you today?
                </p>
              </div>
              
              <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                <p className="text-sm text-gray-700">
                  I can help you with:
                </p>
                <ul className="text-xs text-gray-600 mt-2 space-y-1">
                  <li>• Service information</li>
                  <li>• Pricing inquiries</li>
                  <li>• Booking consultations</li>
                  <li>• General questions</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-gray-200">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF5007]"
              />
              <button
                type="submit"
                className="bg-[#FF5007] text-white p-2 rounded-lg hover:bg-[#ff6a2e] transition-colors"
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-2 text-center">
              This is a demo chatbot. Real functionality coming soon!
            </p>
          </div>
        </div>
      )}
    </>
  );
}
