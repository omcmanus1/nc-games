import { Link } from "react-router-dom";

export default function ReviewCard(reviewOutput) {
  const review = JSON.parse(reviewOutput.value);
  return (
    <Link to={`/reviews/${review.review_id}`}>
      <section className="reviews-card">
        <h2>{review.title}</h2>
        <h3>
          ({review.owner},{" "}
          {review.created_at.substring(0, review.created_at.indexOf("T"))})
        </h3>
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
