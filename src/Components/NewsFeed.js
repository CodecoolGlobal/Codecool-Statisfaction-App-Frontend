import React from "react";
import "../Components/NewsFeed.css";
import PageHeader from "./PageHeader/PageHeader";

function NewsFeed() {
  return (
    <div className="wall">
      <PageHeader title={"News"} />
      <div className="newsfeed">
        <h2>News</h2>
      </div>
    </div>
  );
}

export default NewsFeed;
