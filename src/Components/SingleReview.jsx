import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleReview, incrementVote } from "../api";
import ReviewComments from "./ReviewComments";

export default function SingleReview() {
  const { review_id } = useParams();
  const [singleReviewData, setSingleReviewData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [commentsClicked, setCommentsClicked] = useState(false);
  const [userLike, setUserLike] = useState(0);
  const [likeError, setLikeError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchSingleReview(review_id).then((review) => {
      setSingleReviewData(review);
      setIsLoading(false);
    });
  }, [review_id]);

  const handleCommentsClick = () => {
    setCommentsClicked(!commentsClicked);
  };

  const handleLikeClick = (path, increment) => {
    setLikeError(false);
    setUserLike(userLike + increment);
    incrementVote(path, increment).catch((err) => {
      setUserLike(0);
      setLikeError(true);
    });
  };

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <section className="reviews-card">
      <h2>{singleReviewData.title}</h2>
      <h3>(user: {singleReviewData.owner})</h3>
      <img
        className="review-image"
        src={singleReviewData.review_img_url}
        alt={singleReviewData.title}
      />
      <p className="review-body">{singleReviewData.review_body}</p>
      <ul className="review-details">
        <li>Game Designer: {singleReviewData.designer}</li>
        <li>Category: {singleReviewData.category}</li>
        <li>
          Posted:{" "}
          {singleReviewData.created_at.substring(
            0,
            singleReviewData.created_at.indexOf("T")
          )}
        </li>
        <li>
          Likes: {singleReviewData.votes + userLike}
          <button
            className="like-button"
            onClick={() => handleLikeClick(`/reviews/${review_id}`, 1)}
            disabled={userLike === 1}
          >
            👍
          </button>
          <button
            className="like-button"
            onClick={() => handleLikeClick(`/reviews/${review_id}`, -1)}
            disabled={userLike === -1}
          >
            👎
          </button>
          {likeError ? <p className="error-message">Error Liking!!!</p> : null}
        </li>
        <li>
          {commentsClicked ? (
            <button className="comment-button hide-comments" onClick={handleCommentsClick}>
              Hide Comments
            </button>
          ) : (
            <button className="comment-button show-comments" onClick={handleCommentsClick}>
              Show Comments ({singleReviewData.comment_count})
            </button>
          )}
        </li>
      </ul>
      {commentsClicked ? <ReviewComments review_id={review_id} /> : null}
    </section>
  );
}
