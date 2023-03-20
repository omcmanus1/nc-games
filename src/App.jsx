import { Route, Routes } from "react-router-dom";
import "./App.css";
import Categories from "./Components/Categories";
import HomePage from "./Components/HomePage";
import Navbar from "./Components/Navbar";
import PostReview from "./Components/PostReview";
import Reviews from "./Components/Reviews";
import SingleReview from "./Components/SingleReview";
import Users from "./Components/Users";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/reviews/:review_id" element={<SingleReview />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/users" element={<Users />} />
        <Route path="/reviews/post-review" element={<PostReview />} />
        <Route path="/*" element={<h2>Page Not Found!</h2>} />
      </Routes>
    </div>
  );
}

export default App;
