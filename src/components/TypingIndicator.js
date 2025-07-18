import React from 'react';

function TypingIndicator() {
    return (
        <div className="flex items-start space-x-3 mb-4 animate-fadeIn">
            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-semibold animate-pulse">
                M
            </div>
            <div className="bg-gray-700 text-white px-4 py-2 rounded-lg">
                <div className="flex items-center space-x-1">
                    <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TypingIndicator;