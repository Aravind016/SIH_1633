import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ChatPage = () => {
  const { name } = useParams(); // Extract the user's name from the route
  const [messages, setMessages] = useState([
    { sender: 'You', text: 'Hi, how are you?', time: '10:30 AM' },
    { sender: name, text: 'I’m good, thanks!', time: '10:32 AM' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        { sender: 'You', text: newMessage, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) },
      ]);
      setNewMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-green-600 text-white flex items-center p-4 shadow">
        <div className="w-10 h-10 bg-green-800 rounded-full flex justify-center items-center mr-4">
          <span className="text-white font-bold text-lg">{name[0]}</span>
        </div>
        <div>
          <h1 className="font-bold text-lg">{name}</h1>
          <p className="text-sm text-gray-200">Online</p>
        </div>
      </header>

      {/* Messages Section */}
      <div className="flex-grow overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex mb-3 ${message.sender === 'You' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs p-3 rounded-lg shadow-lg ${
                message.sender === 'You' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'
              }`}
            >
              <p className="text-sm">{message.text}</p>
              <p className="text-xs mt-1 text-right opacity-70">{message.time}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="bg-gray-200 p-4 flex items-center border-t border-gray-300">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={handleKeyPress} // Listen for the Enter key
          placeholder="Type a message..."
          className="flex-grow border border-gray-400 rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white"
        />
        <button
          onClick={sendMessage}
          className="ml-4 bg-green-600 text-white p-3 rounded-full shadow hover:bg-blue-700 transition"
        >
          {/* Send Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M22 2L11 13"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M22 2L15 22L11 13L2 9L22 2Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
