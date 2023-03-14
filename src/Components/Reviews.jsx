import { useEffect, useState } from "react";

import ReviewsFilter from "./ReviewsFilter";
import { fetchAllReviews } from "../api";
import ReviewsCard from "./ReviewsCard";

export default function Reviews() {
  const [reviewData, setReviewData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchAllReviews().then((reviews) => {
      setReviewData(reviews);
      setIsLoading(false);
    });
  }, []);

  const buildReviewCard = () => {
    return reviewData.map((review) => {
      return (
        <ReviewsCard
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
    <>
      <ReviewsFilter />
      <h1 className="reviews-title">Top Reviews</h1>
      {buildReviewCard()}
    </>
  );
}
