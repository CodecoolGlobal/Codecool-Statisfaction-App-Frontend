import React from "react";
import Feedbacks from "../../Components/Feedbacks/Feedbacks";
import Sidebar from "../../Components/Sidebar/Sidebar";

export default function FeedbacksPage() {
  return (
    <div className="app">
      <Sidebar />
      <Feedbacks />
    </div>
  );
}
