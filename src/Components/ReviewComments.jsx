import { useEffect, useState } from "react";
import { fetchReviewComments, postComment } from "../api";

export default function ReviewComments({ review_id }) {
  const [isLoading, setIsLoading] = useState(true);
  const [reviewComments, setReviewComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchReviewComments(review_id).then((res) => {
      setReviewComments(res);
      setIsLoading(false);
    });
  }, [review_id]);

  const renderComments = () => {
    return reviewComments.map((comment) => {
      return (
        <li className="comments-list" key={comment.comment_id}>
          {comment.body} ({comment.votes} Likes)
        </li>
      );
    });
  };

  const handleCommentText = (e) => {
    setCommentText(e.target.value);
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    setSubmitted(false);
    if (commentText !== "") {
      setIsLoading(true);
      setErrorMessage("");
      postComment(review_id, "grumpy19", commentText)
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
    <>
      <ul className="comments-list">{renderComments()}</ul>
      <form className="comment-form" onSubmit={handleSubmitComment}>
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
        {errorMessage ? <p className="error-message">{errorMessage}</p> : null}
        {submitted ? (
          <p className="success-message">Comment Submitted!</p>
        ) : null}
      </form>
    </>
  );
}
