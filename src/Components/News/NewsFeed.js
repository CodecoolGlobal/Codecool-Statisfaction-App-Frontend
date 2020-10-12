import React, { useEffect, useState } from "react";
import { getNews, postNews, getNewsById } from "../../Api/NewsCalls";
import "./NewsFeed.css";
import News from "./News";
import PageHeader from "../PageHeader/PageHeader";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import { isAdmin } from "../../Api/AuthCalls";

function NewsFeed() {
  const [news, setNews] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const [newsMessage, setNewsMessage] = useState("");
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

  const handleClose = () => {
    setShowAdd(false);
    setNewsMessage("");
  };

  const handleSave = () => {
    setShowAdd(false);
    let n = {
      description: newsMessage,
    };

    async function SendNews(n) {
      let newsId = await postNews(n);
      if (newsId.id > 0) {
        let newNews = await getNewsById(newsId.id);
        let allNews = news.concat(newNews);
        allNews.sort((n) => n.date);
        setNews(allNews);
        setNewsMessage("");
      }
    }
    SendNews(n);
  };

  return (
    <div className="wall">
      <PageHeader title={"News"} />
      <div className="newsfeed">
        {news.map((n) => {
          return <News key={n.id} news={n} />;
        })}
      </div>
      {admin ? (
        <div className="button-container">
          <Button
            id="add-feedback-btn"
            variant="contained"
            color="primary"
            onClick={() => setShowAdd(true)}
          >
            Add news
          </Button>
          <Dialog
            open={showAdd}
            onClose={handleClose}
            aria-labelledby="add-dialog-title"
          >
            <DialogTitle id="add-dialog-title">Add news</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="title-input"
                label="News message"
                multiline
                fullWidth
                onChange={(event) => setNewsMessage(event.target.value)}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button
                onClick={handleSave}
                color="primary"
                disabled={newsMessage.length === 0}
              >
                Add news
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      ) : null}
    </div>
  );
}

export default NewsFeed;
