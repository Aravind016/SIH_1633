import React, { useState } from "react";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [requests, setRequests] = useState([
    { id: 1, name: "Request 1", status: "Pending" },
    { id: 2, name: "Request 2", status: "Pending" },
    { id: 3, name: "Request 3", status: "Pending" },
  ]); // Sample requests

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Function to handle approve/reject actions
  const handleAction = (id, action) => {
    setRequests((prevRequests) =>
      prevRequests.map((req) =>
        req.id === id ? { ...req, status: action } : req
      )
    );
  };

  return (
    <div>
      {/* Header Section */}
      <header className="bg-gray-800 text-white py-4 px-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">SIWA</h1>

        {/* Button to open sidebar */}
        <button
          onClick={toggleSidebar}
          className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-500"
        >
          Requests
        </button>
      </header>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white p-6 transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <button
          onClick={toggleSidebar}
          className="text-white bg-red-500 px-4 py-2 rounded-lg mb-4 hover:bg-red-600"
        >
          Close
        </button>
        <h2 className="text-lg font-bold mb-4">Requests</h2>

        {/* List of Requests */}
        <ul>
          {requests.map((req) => (
            <li key={req.id} className="mb-4 p-4 bg-gray-800 rounded-lg shadow-md">
              <h4 className="font-bold">{req.name}</h4>
              <p className="text-sm text-gray-400">Status: {req.status}</p>

              {/* Approve/Reject Buttons */}
              <div className="mt-2 flex space-x-2">
                <button
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                  onClick={() => handleAction(req.id, "Approved")}
                  disabled={req.status !== "Pending"}
                >
                  Approve
                </button>
                <button
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                  onClick={() => handleAction(req.id, "Rejected")}
                  disabled={req.status !== "Pending"}
                >
                  Reject
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Backdrop (optional) */}
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        ></div>
      )}
    </div>
  );
};

export default Header;
