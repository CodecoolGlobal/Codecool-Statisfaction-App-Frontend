import React from "react";
import "./News.css";

export default function News({ news }) {
  return (
    <div className="news-container">
      <div className="news-header">
        <div className="news-author">{news.userName}</div>
        <div className="news-date">{news.date}</div>
      </div>
      <div className="news-body">
        <div className="news-post">{news.description}</div>
      </div>
    </div>
  );
}
