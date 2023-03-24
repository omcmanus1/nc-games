import { useState, useContext } from "react";

import { UserContext } from "../contexts/Users";
import { postComment } from "../api";

export default function SubmitCommentForm({
  review_id,
  reviewComments,
  setReviewComments,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loggedInUser] = useContext(UserContext);

  const handleCommentText = (e) => {
    setCommentText(e.target.value);
  };

  const handleFormFocus = () => {
    setErrorMessage("");
    setSubmitted("");
  };

  const handleSubmitCommentForm = (e) => {
    e.preventDefault();
    setSubmitted(false);
    if (commentText !== "") {
      setIsLoading(true);
      setErrorMessage("");
      postComment(review_id, loggedInUser.username, commentText)
        .then((comment) => {
          setReviewComments([...reviewComments, comment]);
          setCommentText("");
          setIsLoading(false);
          setSubmitted(true);
        })
        .catch((err) => {
          if (err.message) setErrorMessage(err.message);
          else setErrorMessage(err.response.data.message);
          setIsLoading(false);
        });
    } else setErrorMessage("No comment provided");
  };

  return (
    <form
      className="comment-form"
      onFocus={handleFormFocus}
      onSubmit={handleSubmitCommentForm}
    >
      <label htmlFor="submit-comment">Add a comment:</label>
      <input
        id="submit-comment"
        placeholder="start typing..."
        value={commentText}
        onChange={handleCommentText}
        disabled={isLoading}
      ></input>
      <button
        className="comment-button add-comment"
        value="Add Comment"
        id="submit-button"
        disabled={isLoading}
      >
        Submit
      </button>
      {errorMessage ? <p className="red-text">{errorMessage}</p> : null}
      {submitted ? <p className="success-message">Comment Submitted!</p> : null}
    </form>
  );
}
