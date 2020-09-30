import { Card, CardActions, CardContent, IconButton } from "@material-ui/core";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import React, { useState } from "react";
import "./Feedback.css";

export default function Feedback(props) {
  const [votes, setVotes] = useState(props.votes);
  return (
    <Card
      className="feedback-card"
      style={{
        backgroundColor: "rgba(82, 137, 255, 0.1)",
        borderRadius: 10,
        border: "1px solid rgba(156, 156, 156, 0.2)",
      }}
      variant="outlined"
    >
      <CardContent>
        <p>{props.title}</p>
        <div className="card-footer">
          <p className="username">{props.user}</p>
          <p className="date">{props.date}</p>
        </div>
      </CardContent>
      <CardActions>
        <p>{votes}</p>
        <IconButton
          onClick={() => {
            setVotes(votes + 1);
            props.handleVote({ id: props.id, votes: votes });
          }}
        >
          <KeyboardArrowUpIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
