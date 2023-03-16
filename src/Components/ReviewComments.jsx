import { useEffect, useState } from "react";
import { fetchReviewComments, postComment } from "../api";

export default function ReviewComments({ review_id }) {
  const [isLoading, setIsLoading] = useState(true);
  const [reviewComments, setReviewComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [finalisedComment, setFinalisedComment] = useState("");
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
    setCommentText(e.target.value);
  };

  const handleSubmitComment = (e) => {
    setIsLoading(true);
    setErrorMessage("");
    e.preventDefault();
    postComment(review_id, "grumpy19", commentText)
      .then((comment) => {
        setFinalisedComment(commentText);
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
        {finalisedComment ? (
          <li className="comments-list">{finalisedComment} (0 Likes)</li>
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
