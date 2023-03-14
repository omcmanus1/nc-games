import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleReview } from "../api";

export default function SingleReview() {
  const { review_id } = useParams();
  const [singleReviewData, setSingleReviewData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchSingleReview(review_id).then((review) => {
      setSingleReviewData(review);
      setIsLoading(false);
    });
  }, [review_id, setSingleReviewData]);

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
        <li>Likes: {singleReviewData.votes}</li>
        <li>Comments: {singleReviewData.comment_count}</li>
        <li>
          Posted:{" "}
          {singleReviewData.created_at.substring(
            0,
            singleReviewData.created_at.indexOf("T")
          )}
        </li>
      </ul>
    </section>
  );
}
