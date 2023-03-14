import { useEffect, useState } from "react";
import { fetchReviewComments } from "../api";

export default function ReviewComments({ review_id }) {
  const [isLoading, setIsLoading] = useState(true);
  const [reviewComments, setReviewComments] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetchReviewComments(review_id)
      .then((res) => {
        setReviewComments(res);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [review_id]);

  const renderComments = () => {
    console.log(reviewComments);
    return reviewComments.map((comment) => {
      return (
        <li className="comments-list" key={comment.comment_id}>
          {comment.body}
        </li>
      );
    });
  };

  if (isLoading) return <h2>Loading...</h2>;

  return <ol className="comments-list">{renderComments()}</ol>;
}
