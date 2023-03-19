import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import SortReviews from "./SortReviews";
import ReviewsOutput from "./ReviewsOutput";

export default function Reviews() {
  const [reviewsData, setReviewsData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const categoryQuery = searchParams.get("category");
  const sortBy = searchParams.get("sort_by");
  const orderBy = searchParams.get("order");

  return (
    <section className="reviews-page">
      {/* keep headers, filter and sort options here (avoid re-render) */}
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
      {/* move entire reviews data output into ReviewsOutput 
      along with useEffect to only trigger re-render
      for updated reivews cards */}
      <ReviewsOutput
        categoryQuery={categoryQuery}
        sortBy={sortBy}
        orderBy={orderBy}
        setReviewsData={setReviewsData}
        reviewsData={reviewsData}
      />
    </section>
  );
}
