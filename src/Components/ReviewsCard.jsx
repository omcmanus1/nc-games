import { Link } from "react-router-dom";

export default function ReviewsCard(reviewOutput) {
  const review = JSON.parse(reviewOutput.value);
  return (
    <Link to={`/reviews/${review.review_id}`}>
      <section className="reviews-card">
        <h2>{review.title}</h2>
        <h3>(user: {review.owner})</h3>
        <img
          className="review-image"
          src={review.review_img_url}
          alt={review.title}
        />
        <ul className="review-details">
          <li>Designer: {review.designer}</li>
          <li>Category: {review.category}</li>
          <li>Likes: {review.votes}</li>
          <li>Comments: {review.comment_count}</li>
        </ul>
      </section>
    </Link>
  );
}
