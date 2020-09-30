import React from "react";
import InfoBar from "../Components/InfoBar/InfoBar";
import Profile from "../Components/Profile/Profile";
import Sidebar from "../Components/Sidebar/Sidebar";
import "../Pages/ProfilePage.css";

function ProfilePage() {
  return (
    <div className="app">
      <Sidebar />
      <Profile />
      <InfoBar />
    </div>
  );
}

export default ProfilePage;
