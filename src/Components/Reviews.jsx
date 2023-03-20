import { useSearchParams } from "react-router-dom";

import SortReviews from "./SortReviews";
import ReviewsOutput from "./ReviewsOutput";

export default function Reviews() {
  const [searchParams, setSearchParams] = useSearchParams();

  const categoryQuery = searchParams.get("category");
  const sortBy = searchParams.get("sort_by");
  const orderBy = searchParams.get("order");

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
      <ReviewsOutput
        categoryQuery={categoryQuery}
        sortBy={sortBy}
        orderBy={orderBy}
      />
    </section>
  );
}
