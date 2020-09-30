import React, { useEffect, useState } from "react";
import { GetFeedbacks } from "../../Api/FeedbacksCalls";
import Feedback from "../Feedback/Feedback";
import "./Feedbacks.css";

export default function Feedbacks() {
  const [feedbacks, setFeedbacks] = useState([]);

  const handleVote = (vote) => {
      
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
    </div>
  );
}
