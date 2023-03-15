import { useEffect, useState } from "react";
import { fetchReviewComments, postComment } from "../api";

export default function ReviewComments({ review_id }) {
  const [isLoading, setIsLoading] = useState(true);
  const [reviewComments, setReviewComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [finalComment, setFinalComment] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
    setNewComment(e.target.value);
  };

  const handleSubmitComment = (e) => {
    setIsLoading(true);
    setErrorMessage("");
    e.preventDefault();
    postComment(review_id, "grumpy19", newComment)
      .then((comment) => {
        setFinalComment(newComment);
        setIsLoading(false);
        return comment;
      })
      .catch((err) => {
        setErrorMessage(err.response.data.message);
        setIsLoading(false);
      });
  };

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <>
      <ul className="comments-list">
        {renderComments()}
        {errorMessage ? <p className="error-message">{errorMessage}</p> : null}
        {finalComment ? (
          <li className="comments-list">{finalComment}</li>
        ) : null}
      </ul>
      <form className="comment-form">
        <label htmlFor="submit-comment">Add a comment:</label>
        <input
          id="submit-comment"
          placeholder="start typing..."
          onChange={handleCommentText}
        ></input>
        <input
          className="comment-button add-comment"
          type="submit"
          value="Add Comment"
          onClick={handleSubmitComment}
        ></input>
      </form>
    </>
  );
}
