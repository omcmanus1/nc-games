import axios from "axios";

const ncgamesApi = axios.create({
  baseURL: "https://nc-games-74ev.onrender.com/api/",
});

export const fetchAllReviews = () => {
  return ncgamesApi.get("/reviews?sort_by=votes").then((res) => {
    const { reviews } = res.data;
    return reviews;
  });
};

export const fetchSingleReview = (review_id) => {
  return ncgamesApi.get(`/reviews/${review_id}`).then((res) => {
    const { review } = res.data;
    return review[0];
  });
};
