export default function SortReviews({ setSortOrder, setSearchParams }) {
  const ChooseFilter = (e) => {
    setSortOrder(e.target.value);
    // setSearchParams(
    //   (currentParams) => `${currentParams}&sort_by=${e.target.value}`
    // );
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
        <option id="comments" value="comment_count">
          Comments
        </option>
        <option id="votes" value="votes">
          Votes
        </option>
      </select>
    </form>
  );
}
