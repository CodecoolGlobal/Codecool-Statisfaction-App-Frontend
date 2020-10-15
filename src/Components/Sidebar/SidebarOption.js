import React from "react";
import "../Sidebar/SidebarOption.css";
import Icon from "@material-ui/core/Icon";

function SidebarOption({ text, active, onClick, iconName }) {
  return (
    <div
      className={`sidebarOption ${active && "sidebarOption--active"}`}
      onClick={onClick}
    >
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      ></link>
      <Icon className="sidebar-icon">{iconName}</Icon>
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;
