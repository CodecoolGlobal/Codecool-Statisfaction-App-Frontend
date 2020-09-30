import React from "react";
import NewsFeed from "../Components/NewsFeed";
import InfoBar from "../Components/InfoBar/InfoBar";
import Sidebar from "../Components/Sidebar/Sidebar";

export default function HomePage() {
  return (
    <div className="app">
      <Sidebar />
      <NewsFeed />
      <InfoBar />
    </div>
  );
}
