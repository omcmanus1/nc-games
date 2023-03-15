import { useEffect, useState } from "react";
import { fetchReviewComments, postComment } from "../api";

export default function ReviewComments({ review_id }) {
  const [isLoading, setIsLoading] = useState(true);
  const [reviewComments, setReviewComments] = useState([]);
  const [newComment, setNewComment] = useState("");

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
    e.preventDefault();
    console.log(newComment);
    postComment(review_id, "happyamy2016", newComment);
  };

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <>
      <ul className="comments-list">{renderComments()}</ul>
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
