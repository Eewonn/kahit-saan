interface ChatBubbleProps {
  message: string;
  isUser: boolean;
  timestamp?: string;
}

export default function ChatBubble({ message, isUser, timestamp }: ChatBubbleProps) {
  return (
    <div className={`flex w-full mb-4 animate-fadeIn ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
        isUser 
          ? 'bg-indigo-600 text-white rounded-br-sm' 
          : 'bg-white text-gray-800 rounded-bl-sm shadow-sm border border-gray-100'
      }`}>
        <p className="text-sm leading-relaxed">{message}</p>
        {timestamp && (
          <p className={`text-xs mt-1 ${isUser ? 'text-indigo-200' : 'text-gray-400'}`}>
            {timestamp}
          </p>
        )}
      </div>
    </div>
  );
}
