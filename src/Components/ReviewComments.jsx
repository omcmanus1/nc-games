import { useEffect, useState } from "react";
import { fetchReviewComments } from "../api";

export default function ReviewComments({ review_id }) {
  const [isLoading, setIsLoading] = useState(true);
  const [reviewComments, setReviewComments] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetchReviewComments(review_id)
      .then((res) => {
        setReviewComments(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [review_id]);

  console.log(reviewComments);

  if (isLoading) return <h2>Loading...</h2>;

  return <h2>Hi</h2>;
}
