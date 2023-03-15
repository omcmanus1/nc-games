import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleReview } from "../api";
import ReviewComments from "./ReviewComments";

export default function SingleReview() {
  const { review_id } = useParams();
  const [singleReviewData, setSingleReviewData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [commentsClicked, setCommentsClicked] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchSingleReview(review_id).then((review) => {
      setSingleReviewData(review);
      setIsLoading(false);
    });
  }, [review_id]);

  const handleButtonClick = () => {
    setCommentsClicked(!commentsClicked);
  };

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <section className="reviews-card">
      <h2>{singleReviewData.title}</h2>
      <h3>({singleReviewData.owner})</h3>
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
        <li>Likes: {singleReviewData.votes}</li>
        <li>
          {commentsClicked ? (
            <button className="comment-button" onClick={handleButtonClick}>
              Hide Comments
            </button>
          ) : (
            <button className="comment-button" onClick={handleButtonClick}>
              Show Comments ({singleReviewData.comment_count})
            </button>
          )}
        </li>
      </ul>
      {commentsClicked ? <ReviewComments review_id={review_id} /> : null}
    </section>
  );
}
