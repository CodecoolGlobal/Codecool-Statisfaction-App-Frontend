import React, { useEffect, useState } from "react";
import { getNews } from "../../Api/NewsCalls";
import "./NewsFeed.css";
import News from "./News";
import PageHeader from "../PageHeader/PageHeader";
import { isAdmin } from "../../Api/AuthCalls";

function NewsFeed() {
  const [news, setNews] = useState([]);
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    async function fetchNews() {
      let result = await getNews();
      setNews(result);
    }
    fetchNews();
  }, []);

  useEffect(() => {
    async function FetchAdmin() {
      let result = await isAdmin();
      setAdmin(result);
    }
    FetchAdmin();
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
