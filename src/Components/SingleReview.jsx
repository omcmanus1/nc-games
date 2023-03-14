import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleReview } from "../api";

export default function SingleReview() {
  const { review_id } = useParams();
  const [singleReviewData, setSingleReviewData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchSingleReview(review_id).then((review) => {
      setSingleReviewData(review);
      setIsLoading(false);
    });
  }, [review_id, setSingleReviewData]);

  if (isLoading) return <h2>Loading...</h2>;

  return <h2>This Is A Single Review for ID {review_id}</h2>;
}
