import React from "react";
import Feed from "../Components/Feed";
import InfoBar from "../Components/InfoBar/InfoBar";
import Sidebar from "../Components/Sidebar/Sidebar";

export default function HomePage() {
  return (
    <div className="app">
      <Sidebar />
      <Feed />
      <InfoBar />
    </div>
  );
}
