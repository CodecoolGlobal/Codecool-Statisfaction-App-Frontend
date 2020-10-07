import React, { useEffect, useState } from "react";
import {getNews} from "../../Api/NewsCalls";
import "./NewsFeed.css";
import News from "./News";
import PageHeader from "../PageHeader/PageHeader";

function NewsFeed() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      let result = await getNews();
      setNews(result);
    }
    fetchNews();
  }, []);

  return (
    <div className="wall">
      <PageHeader title={"News"} />
      <div className="newsfeed">
        {news.map((n) => {
          return <News key={n.id} news={n} />;
        })}
      </div>
    </div>
  );
}

export default NewsFeed;
