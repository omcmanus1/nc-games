import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Reviews from "./Components/Reviews";
import SingleReview from "./Components/SingleReview";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/reviews/:review_id" element={<SingleReview />} />
      </Routes>
    </div>
  );
}

export default App;
