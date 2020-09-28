import React from "react";
import Feed from "../Components/Feed";
import Sidebar from "../Components/Sidebar/Sidebar";

export default function HomePage() {
  return (
    <div className="app">
      <Sidebar />
      <Feed />
    </div>
  );
}
