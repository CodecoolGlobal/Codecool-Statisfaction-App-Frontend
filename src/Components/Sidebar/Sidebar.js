import React from "react";
import SidebarOption from "./SidebarOption";
import "../Sidebar/Sidebar.css";
import { logout } from "../../Api/AuthCalls";
import { useHistory } from "react-router-dom";

export default function Sidebar(props) {
  const history = useHistory();

  const questsionsPage = () => {
    history.push("/questions");
  };

  const profilePage = () => {
    history.push("/profile");
  };

  const homePage = () => {
    history.push("/");
  };

  const handleLogout = async () => {
    if (await logout()) history.push("/login");
  };

  const feedbacksPage = () => {
    history.push("/feedbacks");
  };

  return (
    <div className="sidebar">
      <SidebarOption
        active
        onClick={homePage}
        text="News"
        iconName="announcement"
      />
      <SidebarOption
        onClick={feedbacksPage}
        text="Feedbacks"
        iconName="error"
      />
      <SidebarOption
        onClick={questsionsPage}
        text="Questions"
        iconName="help"
      />
      <SidebarOption onClick={profilePage} text="Profile" iconName="person" />
      <SidebarOption onClick={handleLogout} text="Logout" iconName="lock" />
    </div>
  );
}
