export default function SortReviews({ searchParams, setSearchParams }) {
  const ChooseFilter = (e) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("sort_by", e.target.value);
    setSearchParams(newSearchParams);
  };

  return (
    <form className="reviews-filter">
      <label className="dropdown-label" htmlFor="filter-reviews">
        Sort By:
      </label>
      <select
        className="dropdown"
        name="filters"
        id="filter-reviews"
        defaultValue=""
        onChange={ChooseFilter}
      >
        <option id="default-option" value="" disabled>
          Please Choose...
        </option>
        <option id="date" value="created_at">
          Date
        </option>
        <option id="votes" value="votes">
          Votes
        </option>
      </select>
    </form>
  );
}
