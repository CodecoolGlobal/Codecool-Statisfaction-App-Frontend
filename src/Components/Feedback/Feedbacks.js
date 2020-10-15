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
import { isAdmin } from "../../Api/AuthCalls";
import {
  DeleteFeedback,
  GetFeedback,
  GetFeedbacks,
  PostFeedback,
  Vote,
} from "../../Api/FeedbacksCalls";
import Feedback from "../Feedback/Feedback";
import PageHeader from "../PageHeader/PageHeader";
import "./Feedbacks.css";

export default function Feedbacks() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [anonymus, setAnonymus] = useState(false);
  const [voted, setVoted] = useState([]);
  const [admin, setAdmin] = useState(false);

  const handleVote = (feedbackId) => {
    async function SendVote(feedbackId) {
      if (await Vote(feedbackId)) {
        feedbacks.find((f) => f.id === feedbackId).voteCount++;
      }
    }
    SendVote(feedbackId);
    setVoted(voted.concat(feedbackId));
    feedbacks.sort((f) => f.voteCount);
  };

  const handleClose = () => {
    setShowAdd(false);
    setFeedbackMessage("");
    setAnonymus(false);
  };

  const handleSave = () => {
    setShowAdd(false);
    let feedback = {
      anonymus: anonymus,
      title: feedbackMessage,
    };
    async function SendFeedback(feedback) {
      let feedbackId = await PostFeedback(feedback);
      if (feedbackId > 0) {
        let newFeedback = await GetFeedback(feedbackId);
        console.log(newFeedback);
        let fbacks = feedbacks.concat(newFeedback);
        fbacks.sort((f) => f.voteCount);
        setFeedbacks(fbacks);
        setFeedbackMessage("");
      }
    }
    SendFeedback(feedback);
  };

  const handleDelete = (id) => {
    async function RemoveFeedback(id) {
      let result = await DeleteFeedback(id);
      if (result) {
        let filtered = feedbacks.filter((f) => f.id !== id);
        setFeedbacks(filtered);
      }
    }
    RemoveFeedback(id);
  };

  useEffect(() => {
    async function FetchFeedbacks() {
      let result = await GetFeedbacks();
      if (result) {
        if (result.feedbacks) setFeedbacks(result.feedbacks);
        if (result.votedFeedbackIds) setVoted(result.votedFeedbackIds);
      }
    }
    FetchFeedbacks();
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
      <PageHeader title={"Feedbacks"} />
      <div className="feedbacks">
        {feedbacks.length === 0 ? (
          <p>There are no feedbacks yet</p>
        ) : (
          feedbacks.map((feedback) => (
            <Feedback
              key={`feedback-${feedback.id}`}
              title={feedback.title}
              date={feedback.date}
              user={feedback.userName}
              votes={feedback.voteCount}
              handleVote={handleVote}
              id={feedback.id}
              voted={voted}
              admin={admin}
              handleDelete={handleDelete}
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
