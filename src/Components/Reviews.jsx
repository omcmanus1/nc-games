import { useEffect, useState } from "react";

import ReviewsFilter from "./ReviewsFilter";
import { fetchAllReviews } from "../api";
import ReviewsCard from "./ReviewsCard";

export default function Reviews() {
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    fetchAllReviews().then((reviews) => setReviewData(reviews));
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

  return (
    <>
      <ReviewsFilter />
      <h1 className="reviews-title">Top Reviews</h1>
      {buildReviewCard()}
    </>
  );
}
