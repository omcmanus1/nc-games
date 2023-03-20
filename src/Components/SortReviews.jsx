import { useState } from "react";

export default function SortReviews({ searchParams, setSearchParams }) {
  const [descending, setDescending] = useState(true);
  const newSearchParams = new URLSearchParams(searchParams);

  const ChooseFilter = (e) => {
    newSearchParams.set("sort_by", e.target.value);
    setSearchParams(newSearchParams);
  };

  const handleOrderClick = () => {
    setDescending(!descending);
    // newSearchParams.set("order", descending ? "desc" : "asc");
    // setSearchParams(newSearchParams);
  };

  return (
    <form className="reviews-filter">
      <label className="dropdown-label" htmlFor="filter-reviews">
        Sorted By:
      </label>
      <select
        className="dropdown"
        name="filters"
        id="filter-reviews"
        onChange={ChooseFilter}
      >
        <option id="date" value="created_at">
          Date
        </option>
        <option id="votes" value="votes">
          Votes
        </option>
      </select>
      {descending ? (
        <button
          className="order-by-button"
          type="button"
          value="desc"
          onClick={handleOrderClick}
        >
          &darr;
        </button>
      ) : (
        <button
          className="order-by-button"
          type="button"
          value="asc"
          onClick={handleOrderClick}
        >
          &uarr;
        </button>
      )}
    </form>
  );
}
