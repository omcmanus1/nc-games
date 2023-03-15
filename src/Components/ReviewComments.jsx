import { useEffect, useState } from "react";
import { fetchReviewComments } from "../api";

export default function ReviewComments({ review_id }) {
  const [isLoading, setIsLoading] = useState(true);
  const [reviewComments, setReviewComments] = useState([]);

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

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <>
      <ol className="comments-list">{renderComments()}</ol>
      <button className="comment-button add-comment">Add Comment</button>
    </>
  );
}
