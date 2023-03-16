import { useEffect, useState } from "react";

import ReviewsFilter from "./ReviewsFilter";
import { fetchReviews } from "../api";
import ReviewCard from "./ReviewCard";

export default function Reviews({ category_name } = null) {
  const [reviewsData, setReviewsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchReviews(category_name).then((reviews) => {
      setReviewsData(reviews);
      setIsLoading(false);
    });
  }, [category_name]);

  const buildReviewCard = () => {
    return reviewsData.map((review) => {
      return (
        <ReviewCard
          value={JSON.stringify(review)}
          id={review.id}
          key={review.title}
          review={review}
        />
      );
    });
  };

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <section className="reviews-page">
      <h1 className="reviews-title">Top Reviews</h1>
      {buildReviewCard()}
      <ReviewsFilter />
    </section>
  );
}
