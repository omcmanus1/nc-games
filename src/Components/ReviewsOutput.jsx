import { useEffect, useState } from "react";

import ReviewCard from "./ReviewCard";
import { fetchReviews } from "../api";

export default function ReviewsOutput({
  categoryQuery,
  sortBy,
  orderBy,
  setReviewsData,
  reviewsData,
}) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchReviews(categoryQuery, sortBy, orderBy).then((reviews) => {
      setReviewsData(reviews);
      setIsLoading(false);
    });
  }, [categoryQuery, sortBy, orderBy, setReviewsData]);

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

  return <>{buildReviewCard()}</>;
}
