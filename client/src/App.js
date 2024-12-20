import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import StudentHomePage from "./pages/StudentHomePage";
import HistoryPage from "./pages/HistoryPage";
import DocumentsPage from "./pages/DocumentsPage";
import ProfilePage from "./pages/ProfilePage";
import EditProfilePage from "./pages/EditProfilePage";
import ScheduleMeetPage from "./pages/ScheduleMeetPage";
import AlumniDirectory from "./pages/AlumniDirectory";
import ChatRoom from "./pages/ChatRoom"; 

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-200">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/student-home" element={<StudentHomePage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/documents" element={<DocumentsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/edit-profile" element={<EditProfilePage />} />
          <Route path="/schedule-meet" element={<ScheduleMeetPage />} />
          <Route path="/alumni-directory" element={<AlumniDirectory />} />
          
          <Route path="/chat/:name" element={<ChatRoom />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
