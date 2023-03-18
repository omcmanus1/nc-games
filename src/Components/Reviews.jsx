import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import SortReviews from "./SortReviews";
import { fetchReviews } from "../api";
import ReviewCard from "./ReviewCard";

export default function Reviews() {
  const { category_name } = useParams();
  const [reviewsData, setReviewsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const categoryQuery = searchParams.get("category");
  const sortBy = searchParams.get("sort_by");

  useEffect(() => {
    setIsLoading(true);
    fetchReviews(categoryQuery, sortBy).then((reviews) => {
      setReviewsData(reviews);
      setIsLoading(false);
    });
  }, [category_name, categoryQuery, sortBy]);

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
      <SortReviews
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
      {categoryQuery ? (
        <h1 className="reviews-title">Category: {categoryQuery}</h1>
      ) : (
        <h1 className="reviews-title">All Reviews</h1>
      )}
      {buildReviewCard()}
    </section>
  );
}
