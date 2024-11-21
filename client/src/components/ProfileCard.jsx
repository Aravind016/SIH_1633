import React from "react";
import { useNavigate } from "react-router-dom";

const ProfileCard = ({ name, role, company }) => {
  const navigate = useNavigate();

  const handleSendMessage = () => {
    // Navigate to the one-on-one chat room, passing the user's name (or id)
    navigate(`/chat/${name}`);
  };

  return (
    <div className="relative bg-gradient-to-r from-white to-gray-50 rounded-lg shadow-lg p-4 flex items-center hover:shadow-xl transition-shadow duration-300 ease-in-out">
      {/* Avatar Section */}
      <div className="w-14 h-14 bg-blue-100 rounded-full flex justify-center items-center shadow-md">
        {/* Placeholder for an avatar */}
        <span className="text-blue-500 font-bold text-xl">{name[0]}</span>
      </div>

      {/* Info Section */}
      <div className="ml-4 flex-grow">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-600">{role}</p>
        {company && <p className="text-sm text-gray-500 italic">{company}</p>}
      </div>

      {/* Message Button */}
      <button
        onClick={handleSendMessage}
        className="absolute bottom-2 right-2 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-md hover:bg-blue-600 transition-colors"
      >
        {/* Message Icon (Speech Bubble) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 2C6.48 2 2 5.58 2 9c0 1.2.61 2.63 1.71 3.77L2 18l5.25-1.71c.94.62 2.06.94 3.25.94 5.52 0 10-3.58 10-8s-4.48-8-10-8z"
          />
        </svg>
      </button>
    </div>
  );
};

export default ProfileCard;
