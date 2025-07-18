import { useState, useEffect } from 'react';
import TypingIndicator from './components/TypingIndicator.js';
import MessageComponent from './components/MessageComponent.js';
// import QuickActions from './components/QuickActions.js';
import responses from './data/response.js';

function App(){
    //state
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    // const [messageId, setMessageId] = useState(3);
    // const [showNotification, setShowNotification] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: 1,
            content: "Hello there! I'm Maritza Khansa Salsabilla",
            isUser: false,
            timestamp: new Date()
        },
        {
            id: 2,
            content: "Welcome to my portofolio!",
            isUser: false,
            timestamp: new Date()
        },
        {
            id: 3,
            content: "What would you like to know about me?",
            isUser: false,
            timestamp: new Date(),
            showButtons: true
        }
    ]);

    useEffect(() => {
        const chatContainer = document.getElementById('chatContainer');
        if (chatContainer){
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }
    }, [messages]);

    const addMessage = (content, isUser = false) => {
        const newMessage = {
            id: Date.now(),
            content,
            isUser,
            timestamp: new Date()
        };
        setMessages(prev => [...prev, newMessage]);
    }

    const handleInputSubmit = (e) => {
        e.preventDefault(); 
        
        if (inputValue.trim()) {
            sendMessage(inputValue);
            setInputValue(''); 
        }
    };

    const detailedResponse = (responseType) => {
    setIsTyping(true);

    setTimeout(() => {
        setIsTyping(false);
        const response = responses[responseType];

        if (!response) return;

        let formattedContent = `<div style="margin-bottom: 1rem;"><strong>${response.title}</strong></div>
                               <div style="margin-bottom: 1rem;">${response.content}</div>`;

        if (response.details) {
            if (responseType === 'skills') {
                formattedContent += response.details.map(skill =>
                    `<div style="margin-bottom: 1rem;">
                        <h4 style="color: #8b26ff; font-weight: 600; margin-bottom: 0.5rem;">${skill.category}</h4>
                        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                            ${skill.items.map(item => 
                                `<span style="background-color: #374151; color: #d1d5db; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem;">${item}</span>`
                            ).join('')}
                        </div>
                    </div>`
                ).join('');
            } else if (responseType === 'education') {
                formattedContent += response.details.map(edu =>
                    `<div style="border-left: 4px solid #8b26ff; padding-left: 1rem; margin-bottom: 1rem;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.25rem;">
                            <h4 style="color: #ffffff; font-weight: 600;">${edu.major}</h4>
                            <span style="color: #9ca3af; font-size: 0.75rem; padding: 0rem 0.5rem;">${edu.period}</span>
                        </div>
                        <h5 style="color: #60a5fa; font-weight: 500; margin-bottom: 0.5rem;">${edu.university}</h5>
                        <ul style="color: #d1d5db; font-size: 0.875rem;">
                            ${edu.courses.map(courses => `<li style="margin-bottom: 0.25rem;">• ${courses}</li>`).join('')}
                        </ul>
                    </div>`
                ).join('');
            } else if (responseType === 'projects') {
                formattedContent += response.details.map(project =>
                    `<div style="border: 1px solid #4b5563; border-radius: 0.5rem; padding: 1rem; margin-bottom: 1rem; background-color: rgba(55, 65, 81, 0.5);">
                        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.5rem;">
                            <h4 style="color: #ffffff; font-weight: 600;">${project.name}</h4>
                            <span style="background-color: #7520d6; color: white; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem;">${project.status}</span>
                        </div>
                        <p style="color: #d1d5db; margin-bottom: 0.5rem; font-size: 0.875rem;">${project.description}</p>
                        <div style="color: #60a5fa; font-size: 0.75rem;">${project.tech}</div>
                    </div>`
                ).join('');
            } else if (responseType === 'experience') {
                formattedContent += response.details.map(exp =>
                    `<div style="border-left: 4px solid #8b26ff; padding-left: 1rem; margin-bottom: 1rem;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.25rem;">
                            <h4 style="color: #ffffff; font-weight: 600;">${exp.role}</h4>
                            <span style="color: #9ca3af; font-size: 0.75rem;">${exp.period}</span>
                        </div>
                        <h5 style="color: #60a5fa; font-weight: 500; margin-bottom: 0.5rem;">${exp.company}</h5>
                        <ul style="color: #d1d5db; font-size: 0.875rem;">
                            ${exp.achievements.map(achievement => `<li style="margin-bottom: 0.25rem;">• ${achievement}</li>`).join('')}
                        </ul>
                    </div>`
                ).join('');
            } else if (responseType === 'contact') {
                formattedContent += response.details.map(contact =>
                    `<div style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; background-color: rgba(55, 65, 81, 0.3); border-radius: 0.5rem; margin-bottom: 0.5rem;">
                        <span style="font-size: 1.25rem;">${contact.icon}</span>
                        <div>
                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                <strong style="color: #ffffff;">${contact.platform}:</strong>
                                <span style="color: #60a5fa;">${contact.handle}</span>
                            </div>
                        </div>
                    </div>`
                ).join('');
            }
        }

        const newMessage = {
            id: Date.now(),
            content: formattedContent,
            isUser: false,
            type: 'detailed',
            responseType: responseType
        };

        setMessages(prev => [...prev, newMessage]);
    }, 1500);
};


    const sendMessage = (message) => {
        addMessage(message, true);
        const caseMessage= message.toLowerCase();

        if (caseMessage.includes('skill')){
            detailedResponse('skills');} 
        else if (caseMessage.includes('education')){
            detailedResponse('education');}
        else if (caseMessage.includes('projects')) {
            detailedResponse('projects');} 
        else if (caseMessage.includes('experience')) {
            detailedResponse('experience');} 
        else if (caseMessage.includes('contact')) {
            detailedResponse('contact');} 
        else {
            setIsTyping(true);
            setTimeout(() => {
                setIsTyping(false);
                addMessage("Interesting! So, what else would you like to know?", false);
            }, 1500);
        }
        };

    //send message when user click enter
    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if (inputValue.trim()) {
                sendMessage(inputValue);
                setInputValue('');
            }
        }
    };

    // const copyToClipboard = (text) =>{
    //     navigator.clipboard.writeText(text).then(() => {
    //         setShowNotification(true);
    //         setTimeout(() => setShowNotification(false), 2000);
    //     });
    // };

    return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-violet-900 flex flex-col items-center justify-center p-4 backdrop-blur-sm
">
    {/* Grid background */}

    <div class="absolute -z-10 inset-0 h-full w-full 
    bg-[linear-gradient(to_right,#73737320_1px,transparent_1px),linear-gradient(to_bottom,#73737320_1px,transparent_1px)] 
    bg-[size:10px_10px]" />

        <div className="w-full max-w-4xl">
            {/* Header */}
            {/*glowing effect */}
        <div className="text-center mb-6">
            <h1 className="text-4xl font-bold text-white mt-10 relative">
                <span className="
                    bg-violet-400 font-mono
                    bg-clip-text text-transparent
                    drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]
                    animate-pulse duration-150
                ">
                    Maritza's Interactive Portofolio
                </span>
            </h1>

            <h2 className= "text-base font-normal font-mono text-white text-opacity-35 mt-6 mb-2 relative">
              Want to explore my projects, skills, or experience? <br></br> Ask away with a single tap to one of the buttons below!
            </h2>
        </div>

            {/* Terminal */}
            <div className="bg-gray-800 rounded-lg shadow-2xl overflow-hidden border border-gray-600 ">
                {/* Terminal Header */}
                <div className="bg-gray-700 px-4 py-3 flex items-center space-x-3 border-b border-gray-600">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-300 text-sm font-mono ml-4">mar-porto@bot:~$</span>
                </div>

                {/* Terminal Body */}
                <div className="bg-gray-900">
                    {/* Chat Container */}
                    <div id="chatContainer" className="p-6 h-96 overflow-y-auto space-y-4">
                        {messages.map(message => (
                            <MessageComponent
                                key={message.id}
                                message={message}
                                onQuickAction={sendMessage}
                            />
                        ))}
                        {isTyping && <TypingIndicator />}
                    </div>

                    {/* Input Area */}
                    <div className="border-t border-gray-600 p-4">
                        <form onSubmit={handleInputSubmit} className="flex space-x-3">
                            <input 
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Type a message..."
                                className="flex-1 bg-gray-700 text-white px-4 py-2 rounded border border-gray-600 focus:border-blue-500 focus:outline-none"
                            />
                            <button 
                                type="submit" 
                                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            
            {/* Status */}
            <div className="mt-4 flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse duration-50"></div>
                <span className="text-green-400 text-sm font-medium">Online</span>
            </div>
        </div>
        
        {/* Notification
        {showNotification && (
            <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50">
                Copied to clipboard!
            </div>
        )} */}
    </div>  
    );
}

export default App;






