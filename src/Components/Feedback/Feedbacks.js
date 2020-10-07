import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Switch,
  TextField,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { GetFeedbacks, PostFeedback } from "../../Api/FeedbacksCalls";
import Feedback from "../Feedback/Feedback";
import PageHeader from "../PageHeader/PageHeader";
import "./Feedbacks.css";

export default function Feedbacks() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [anonymus, setAnonymus] = useState(false);

  const handleVote = (vote) => {};

  const handleClose = () => {
    setShowAdd(false);
    setFeedbackMessage("");
    setAnonymus(false);
  };

  const handleSave = () => {
    setShowAdd(false);
    var today = new Date();
    let [month, day, year] = today.toLocaleDateString().split("/");

    let feedback = {
      id: -1,
      user: anonymus ? "anonymus" : "username", //localStorage.getItem("username"),
      title: feedbackMessage,
      date: `${year}-${month}-${day}`,
      votes: 1,
    };
    async function SendFeedback(feedback) {
      let feedbackId = await PostFeedback(feedback);
      if (feedbackId > 0) {
        feedback["id"] = feedbackId;
        setFeedbacks(feedbacks.concat(feedback));
        setFeedbackMessage("");
      }
    }
    SendFeedback(feedback);
  };

  useEffect(() => {
    async function FetchFeedbacks() {
      let result = await GetFeedbacks();
      setFeedbacks(result);
    }
    FetchFeedbacks();
  }, []);

  return (
    <div className="wall">
      <PageHeader title={"Feedbacks"} />
      <div className="feedbacks">
        {feedbacks.length === 0 ? (
          <p>There are no feedbacks yet</p>
        ) : (
          feedbacks.map((feedback) => (
            <Feedback
              key={`feedback-${feedback.title}`}
              title={feedback.title}
              date={feedback.date}
              user={feedback.user}
              votes={feedback.votes}
              handleVote={handleVote}
            />
          ))
        )}
      </div>
      <div className="button-container">
        <Button
          id="add-feedback-btn"
          variant="contained"
          color="primary"
          onClick={() => setShowAdd(true)}
        >
          Add feedback
        </Button>
      </div>
      <Dialog
        open={showAdd}
        onClose={handleClose}
        aria-labelledby="add-dialog-title"
      >
        <DialogTitle id="add-dialog-title">Add feedback</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title-input"
            label="Feedback message"
            multiline
            fullWidth
            onChange={(event) => setFeedbackMessage(event.target.value)}
          />
          <FormControlLabel
            control={
              <Switch
                checked={anonymus}
                onChange={(event) => setAnonymus(event.target.checked)}
                color="primary"
              />
            }
            label="anonymus"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            color="primary"
            disabled={feedbackMessage.length === 0}
          >
            Add feedback
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
