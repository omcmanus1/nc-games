import { useEffect, useState, useContext } from "react";

import SubmitCommentForm from "./SubmitCommentForm";
import { UserContext } from "../contexts/Users";
import { deleteComment, fetchReviewComments } from "../api";

export default function ReviewComments({ review_id }) {
  const [isLoading, setIsLoading] = useState(false);
  const [reviewComments, setReviewComments] = useState([]);
  const [commentsDeleted, setCommentsDeleted] = useState([]);
  const [loggedInUser] = useContext(UserContext);

  useEffect(() => {
    setIsLoading(true);
    fetchReviewComments(review_id).then((res) => {
      setReviewComments(res);
      setIsLoading(false);
    });
  }, [review_id]);

  const renderComments = () => {
    return reviewComments.map((comment) => {
      if (!commentsDeleted.includes(comment.comment_id)) {
        return (
          <li className="comments-list" key={comment.comment_id}>
            [{comment.author}]: {comment.body} ({comment.votes} Likes)
            {comment.author === loggedInUser.username ? (
              <button
                className="comment-button red-text"
                onClick={(e) => {
                  e.preventDefault();
                  deleteComment(comment.comment_id);
                  setCommentsDeleted([...commentsDeleted, comment.comment_id]);
                }}
              >
                Delete
              </button>
            ) : null}
          </li>
        );
      } else
        return (
          <li key={comment.comment_id} className="red-text">
            Comment Deleted!
          </li>
        );
    });
  };

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <>
      <ul className="comments-list">{renderComments()}</ul>
      {loggedInUser.username ? (
        <SubmitCommentForm
          reviewComments={reviewComments}
          setReviewComments={setReviewComments}
        />
      ) : (
        <p className="red-text">LOG IN TO POST A COMMENT</p>
      )}
    </>
  );
}
