import React, { useState, useEffect } from 'react';
import QuickActions from './QuickActions';

function MessageComponent({ message, onQuickAction }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`flex items-start space-x-3 mb-4 ${message.isUser ? 'flex-row-reverse space-x-reverse' : ''} 
        transition-all duration-500 ease-out transform
        `}>
            {/* Avatar */}
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold flex-shrink-0 transition-all duration-300 hover:scale-110 ${
                message.isUser ? 'bg-purple-900' : 'bg-purple-500'}`}>
                {message.isUser ? 'A' : 'M'}
            </div>
            
            {/* Message Bubble */}
            <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg transition-all duration-300 
            hover:shadow-lg
            ${
                message.isUser 
                    ? 'bg-purple-900 text-white' 
                    : 'bg-gray-700 text-white'
            }`}>
                {message.type === 'detailed' ? (
                    <div 
                        className="text-sm"
                        dangerouslySetInnerHTML={{ __html: message.content }}
                    />
                ) : (
                    <div className="text-sm">{message.content}</div>
                )}
                
                {/* Quick Actions */}
                {message.showButtons && (
                    <div className="mt-3 animate-slideUp">
                        <QuickActions onAction={onQuickAction} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default MessageComponent;