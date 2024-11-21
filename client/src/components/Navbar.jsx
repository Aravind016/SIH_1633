import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
    console.log("Selected Language: ", event.target.value);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed bottom-0 left-0 w-full bg-gray-800 text-white py-4 px-6">
        <ul className="flex justify-between items-center">
          <li>
            <Link
              to="/"
              className={`hover:text-gray-300 ${location.pathname === "/" ? "text-blue-500" : ""}`}
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </Link>
          </li>
          <li>
            {/* Button to open chatbot with AI bot icon */}
            <button
              onClick={toggleChatbot}
              className="hover:text-gray-300 focus:outline-none"
            >
              {/* AI Bot icon SVG */}
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M32 2C15.5 2 2 15.5 2 32c0 11.2 6.5 21.2 16.1 25.7-.6 1.7-1 3.5-1 5.3 0 2.7 1.1 5.2 2.8 7.1 1.7 1.9 4.1 2.9 6.5 2.9 1.1 0 2.2-.2 3.2-.7 3.1 1.9 6.9 3 10.9 3 10.5 0 19-8.5 19-19S42.5 2 32 2zm-6 46c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm14-12c-6.6 0-12-5.4-12-12s5.4-12 12-12 12 5.4 12 12-5.4 12-12 12zm-8-20c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
              </svg>
            </button>
          </li>
          <li>
            <Link
              to="/profile"
              className={`hover:text-gray-300 ${location.pathname === "/profile" ? "text-blue-500" : ""}`}
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </li>

          {/* Language Dropdown */}
          <li>
            <select
              value={selectedLanguage}
              onChange={handleLanguageChange}
              className="bg-gray-800 text-white border border-gray-600 rounded-md py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
              <option value="Tamil">Tamil</option>
              <option value="Bengali">Bengali</option>
              <option value="Telugu">Telugu</option>
              <option value="Marathi">Marathi</option>
              <option value="Gujarati">Gujarati</option>
              <option value="Punjabi">Punjabi</option>
              {/* Add more Indian languages as needed */}
            </select>
          </li>
        </ul>
      </nav>

      {/* Chatbot Popup */}
      {isChatbotOpen && (
        <div className="fixed bottom-20 right-4 bg-white rounded-lg shadow-lg w-full max-w-sm md:max-w-md p-4 flex flex-col space-y-4 h-[450px]">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-800">Chatbot</h2>
            <button
              onClick={toggleChatbot}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              ✕
            </button>
          </div>
          <div className="flex-1 overflow-y-auto">
            <div className="text-gray-600">
              {/* Sample Chat Messages */}
              <p className="mb-2">Hi! How can I assist you today?</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 p-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;