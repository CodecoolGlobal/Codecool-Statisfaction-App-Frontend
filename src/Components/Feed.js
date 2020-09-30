import React from "react";
import "../Components/Feed.css";
import PageHeader from "./PageHeader/PageHeader";

function Feed() {
  return (
    <div className="wall">
      <PageHeader title={"Home"} />
      <div className="feed">
        <h2>Home</h2>
      </div>
    </div>
  );
}

export default Feed;
