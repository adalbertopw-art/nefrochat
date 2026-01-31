import React from 'react';
import { Message } from '../types';
import MarkdownRenderer from './MarkdownRenderer';
import { User, Stethoscope } from 'lucide-react';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isModel = message.role === 'model';

  return (
    <div className={`flex w-full ${isModel ? 'justify-start' : 'justify-end'} mb-6 animate-fade-in-up`}>
      <div className={`flex max-w-[85%] md:max-w-[75%] ${isModel ? 'flex-row' : 'flex-row-reverse'} gap-3`}>
        
        {/* Avatar */}
        <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center shadow-sm ${
          isModel ? 'bg-teal-100 text-teal-600' : 'bg-indigo-100 text-indigo-600'
        }`}>
          {isModel ? <Stethoscope size={20} /> : <User size={20} />}
        </div>

        {/* Bubble */}
        <div className={`flex flex-col ${isModel ? 'items-start' : 'items-end'}`}>
          <div className={`px-5 py-4 rounded-2xl shadow-sm text-sm md:text-base ${
            isModel 
              ? 'bg-white text-slate-700 border border-slate-100 rounded-tl-none' 
              : 'bg-teal-600 text-white rounded-tr-none'
          }`}>
            {isModel ? (
              <MarkdownRenderer content={message.text} />
            ) : (
              <p className="whitespace-pre-wrap leading-relaxed">{message.text}</p>
            )}
          </div>
          <span className="text-xs text-slate-400 mt-1 px-1">
            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;