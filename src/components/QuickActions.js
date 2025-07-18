import React from 'react';

function QuickActions({ onAction }) {
    const quickActionButtons = [
        {
            id: 'education',
            icon: '🏫',
            text: 'Education',
            className: 'bg-fuchsia-600 hover:bg-fuchsia-700'
        },
        {
            id: 'skills',
            icon: '💻',
            text: 'Skills',
            className: 'bg-green-600 hover:bg-green-700'
        },
        {
            id: 'experience',
            icon: '🌟',
            text: 'Experience',
            className: 'bg-purple-500 hover:bg-purple-600'
        },
        {
            id: 'projects',
            icon: '🚀',
            text: 'Projects',
            className: 'bg-orange-500 hover:bg-orange-600'
        },
        {
            id: 'contact',
            icon: '📧',
            text: 'Contact Info',
            className: 'bg-blue-500 hover:bg-blue-600'
        },
        {
            id: 'cv',
            icon: '📄',
            text: 'My CV',
            className: 'bg-red-500 hover:bg-red-600',
            type: 'download'
        }
    ];

    const handleButtonClick = (actionId) => {
        const button = quickActionButtons.find(btn => btn.id === actionId);
        
        if (button.type === 'download') {
            handleDownloadCV();
        } else {
        const actionMessages = {
            education: "Show me your education history!",
            skills: "Tell me about your technical skills!",
            experience: "Can you tell me about your experiences?",
            projects: "Show me your best projects!",
            contact: "How can I contact you for opportunities?"
        };
        
        onAction(actionMessages[actionId]);
        }
    };

    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = '/cv/MaritzaKhansa_CV.pdf';
        link.download = 'MaritzaKhansa_CV.pdf';
        link.target = '_blank';
         document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        onAction("I want to collaborate — can I have your resume?");        
    }

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-3">
            {quickActionButtons.map((button, index) => (
                <button
                    key={button.id}
                    onClick={() => handleButtonClick(button.id)}
                    className={`w-full ${button.className} text-white px-3 py-2 rounded text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg
                    flex items-center space-x-2`}
                    style={{
                        animationDelay: `${index * 0.1}s`
                    }}
                >
                    <span>{button.icon}</span>
                    <span>{button.text}</span>
                </button>
            ))}
        </div>
    );
}

export default QuickActions;