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
  const orderBy = searchParams.get("order");
  console.log("orderBy >>", orderBy);

  useEffect(() => {
    setIsLoading(true);
    fetchReviews(categoryQuery, sortBy, orderBy).then((reviews) => {
      setReviewsData(reviews);
      setIsLoading(false);
    });
  }, [category_name, categoryQuery, sortBy, orderBy]);

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
      <h1 className="reviews-header">REVIEWS</h1>
      {categoryQuery ? (
        <h2 className="reviews-subtitle">(Category: {categoryQuery})</h2>
      ) : (
        <h2 className="reviews-subtitle">(All Categories)</h2>
      )}
      <SortReviews
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
      {buildReviewCard()}
    </section>
  );
}
