export default function SortReviews({ searchParams, setSearchParams }) {
  const currentSortBy = searchParams.get("sort_by");
  const currentOrder = searchParams.get("order");
  const newSearchParams = new URLSearchParams(searchParams);
  if (!currentSortBy) newSearchParams.set("sort_by", "created_at");

  const ChooseFilter = (e) => {
    newSearchParams.set("sort_by", e.target.value);
    setSearchParams(newSearchParams);
  };

  const handleOrderClick = (e) => {
    newSearchParams.set("order", e.target.value);
    setSearchParams(newSearchParams);
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
        value={currentSortBy ? currentSortBy : "created_at"}
        onChange={ChooseFilter}
      >
        <option id="date" value="created_at">
          Date
        </option>
        <option id="votes" value="votes">
          Votes
        </option>
      </select>
      {currentOrder !== "asc" ? (
        <button
          className="order-by-button"
          type="button"
          value="asc"
          onClick={handleOrderClick}
        >
          &darr;
        </button>
      ) : (
        <button
          className="order-by-button"
          type="button"
          value="desc"
          onClick={handleOrderClick}
        >
          &uarr;
        </button>
      )}
    </form>
  );
}
