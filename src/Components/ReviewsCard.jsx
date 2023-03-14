export default function ReviewsCard(reviewOutput) {
  const review = JSON.parse(reviewOutput.value);
  return (
    <section className="review-card">
      <h2>{review.title}</h2>
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
        <li>Username: {review.owner}</li>
      </ul>
    </section>
  );
}
