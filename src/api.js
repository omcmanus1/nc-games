import axios from "axios";

const ncgamesApi = axios.create({
  baseURL: "https://nc-games-74ev.onrender.com/api/",
});

export const fetchReviews = (category, sort_by, order) => {
  const params = { params: { category, sort_by, order } };
  return ncgamesApi.get(`/reviews`, params).then((res) => {
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

export const fetchReviewComments = (review_id) => {
  return ncgamesApi.get(`/reviews/${review_id}/comments`).then((res) => {
    const { comments } = res.data;
    return comments;
  });
};

export const incrementVote = (path, increment) => {
  return ncgamesApi.patch(path, { inc_votes: increment }).then((res) => {
    const { review } = res.data;
    return review[0].votes;
  });
};

export const postComment = (review_id, username, comment) => {
  return ncgamesApi
    .post(`/reviews/${review_id}/comments`, {
      username: username,
      body: comment,
    })
    .then((res) => {
      const { comment } = res.data;
      return comment[0];
    });
};

export const fetchCategories = () => {
  return ncgamesApi.get("/categories").then((res) => {
    const { categories } = res.data;
    return categories;
  });
};

export const fetchUsers = () => {
  return ncgamesApi.get("/users").then((res) => {
    const { users } = res.data;
    return users;
  });
};
