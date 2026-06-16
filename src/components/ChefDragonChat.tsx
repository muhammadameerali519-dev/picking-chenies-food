import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Sparkles, ChefHat, Flame, Award, Globe } from 'lucide-react';
import { ChatMessage } from '../types';

export default function ChefDragonChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'Assalam-o-Alaikum! 🐉 Welcome to Picking Chinese Food. I am Chef Dragon AI, your royal culinary guide. I can recommend our legendary best sellers, suggest spiced pairings, clarify menu prices, or guide you to place your order in Urdu, English, or Roman Urdu. How may I serve you today, esteemed guest? ✨',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestedQuestions = [
    'What are your best sellers? 🔥',
    'Which soup should I try? 🍲',
    'Recommend spicy dishes 🌶️',
    'Show seafood dishes 🌊',
    'Help me place an order! 📱'
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(scrollToBottom, 100);
    }
  }, [isOpen, messages, isLoading]);

  const handleSend = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      // Pass the chat history so the AI maintains context
      const history = messages.map(msg => ({
        role: msg.role === 'model' ? 'model' : 'user',
        text: msg.text
      }));

      const res = await fetch('/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, history })
      });

      if (!res.ok) throw new Error('Could not contact Chef Dragon AI');
      
      const data = await res.json();
      
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: data.text || 'Ah, the fires are roaring, but my words escaped. May I suggest ordering one of our golden specialties?',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMsg]);
    } catch (err) {
      console.error(err);
      const errorMsg: ChatMessage = {
        id: (Date.now() + 2).toString(),
        role: 'model',
        text: 'Forgive me, noble guest. The kitchen fires are running excessively hot right now! Please click the WhatsApp button to chat directly, or ask me again shortly. 🥢✨',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Chatbot Bubble Trigger */}
      <div className="fixed bottom-24 right-6 z-50">
        <motion.button
          id="chef-dragon-trigger"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-black via-[#9e6d15] to-[#dfac4c] p-[2px] shadow-2xl transition-all select-none focus:outline-none animate-pulse-gold cursor-pointer"
        >
          <div className="relative flex h-full w-full items-center justify-center rounded-full bg-[#0a0a0a]">
            {/* Glowing Golden Ring Decoration */}
            <div className="absolute inset-0 rounded-full bg-[#dfac4c]/10 blur-md"></div>
            
            {/* Crown of Fire Indicator */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
              className="absolute h-10 w-10 rounded-full border border-dashed border-[#dfac4c]/30"
            ></motion.div>
            
            <ChefHat className="relative h-7 w-7 text-[#dfac4c] group-hover:text-yellow-400" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-[#dfac4c] text-[8px] font-bold text-black items-center justify-center">AI</span>
            </span>
          </div>
        </motion.button>
      </div>

      {/* Expanded Luxury Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="chef-dragon-panel"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed bottom-6 right-6 z-50 flex h-[580px] w-[380px] flex-col rounded-2xl border border-[#dfac4c]/40 bg-black/95 shadow-[0_0_50px_rgba(223,172,76,0.30)] backdrop-blur-xl md:w-[420px] overflow-hidden"
          >
            {/* Imperial Header Block */}
            <div className="relative flex items-center justify-between border-b border-[#dfac4c]/20 bg-gradient-to-r from-black via-[#1a1204] to-black px-5 py-4">
              {/* Gold light sheen background effect */}
              <div className="absolute inset-0 opacity-5 bg-[linear-gradient(45deg,transparent_25%,rgba(223,172,76,0.2)_50%,transparent_75%)] bg-[length:250px_250px]"></div>
              
              <div className="flex items-center space-x-3">
                <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#dfac4c] to-[#9e6d15] p-[1.5px]">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-[#0a0a0a]">
                    <Flame className="h-5 w-5 text-[#dfac4c] animate-pulse" />
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold tracking-widest text-[#dfac4c] flex items-center gap-1.5">
                    CHEF DRAGON AI <Award className="h-3 w-3 text-yellow-400" />
                  </h3>
                  <div className="flex items-center space-x-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-[10px] font-mono tracking-wider uppercase text-gray-400">Imperial Assistant</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#dfac4c]/10 border border-[#dfac4c]/20 text-[9px] text-[#fce0ad]">
                  <Globe className="h-2.5 w-2.5" /> ENG | URDU
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-full p-1.5 text-gray-400 hover:bg-[#dfac4c]/10 hover:text-[#dfac4c] transition"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Message Area */}
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4 text-xs scrollbar select-none">
              {messages.map((msg) => {
                const isModel = msg.role === 'model';
                return (
                  <div
                    key={msg.id}
                    className={`flex ${isModel ? 'justify-start' : 'justify-end'}`}
                  >
                    <div className={`flex w-full max-w-[85%] items-start space-x-2 ${isModel ? '' : 'flex-row-reverse space-x-reverse'}`}>
                      {isModel && (
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#111] border border-[#dfac4c]/30 text-[10px] text-[#dfac4c]">
                          🐉
                        </div>
                      )}
                      
                      <div className={`rounded-xl px-4 py-3 leading-relaxed shadow-md ${
                        isModel 
                          ? 'border border-[#dfac4c]/10 bg-gradient-to-br from-[#0c0c0c] to-[#141414] text-gray-200' 
                          : 'bg-[#dfac4c] text-black font-medium border border-transparent'
                      }`}>
                        {msg.text}
                        <div className={`mt-1.5 text-[8px] text-right ${isModel ? 'text-gray-500' : 'text-yellow-950 opacity-80'}`}>
                          {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-2">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#111] border border-[#dfac4c]/30 text-[10px] text-[#dfac4c]">
                      🐉
                    </div>
                    <div className="rounded-xl border border-[#dfac4c]/10 bg-[#0a0a0a] px-4 py-3 text-gray-400">
                      <div className="flex items-center space-x-1">
                        <span className="font-serif italic animate-pulse text-[#dfac4c] tracking-wider">Chef is preparing response...</span>
                        <span className="h-1 w-1 bg-[#dfac4c] rounded-full animate-bounce"></span>
                        <span className="h-1 w-1 bg-[#dfac4c] rounded-full animate-bounce delay-75"></span>
                        <span className="h-1 w-1 bg-[#dfac4c] rounded-full animate-bounce delay-150"></span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestion Chips */}
            <div className="border-t border-[#dfac4c]/10 bg-[#050505] px-4 py-2">
              <div className="flex flex-wrap gap-1.5 py-1">
                {suggestedQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSend(q.replace(/[🔥🍲🌶️🌊📱]/g, '').trim())}
                    className="rounded-full bg-black border border-[#dfac4c]/20 px-2.5 py-1 text-[10px] font-sans text-gray-300 hover:border-[#dfac4c] hover:bg-[#dfac4c]/5 hover:text-white transition cursor-pointer"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(input);
              }}
              className="border-t border-[#dfac4c]/20 bg-black p-4 flex items-center space-x-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Chef Dragon... (e.g. Recommend spicy dishes)"
                className="flex-1 rounded-full border border-[#dfac4c]/30 bg-[#0c0c0c] px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:border-[#dfac4c] focus:outline-none focus:ring-1 focus:ring-[#dfac4c] transition"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-[#dfac4c] to-[#9e6d15] text-black hover:brightness-110 active:scale-95 disabled:opacity-50 transition cursor-pointer"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
