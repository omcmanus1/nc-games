export default function SortReviews({ setSearchParams }) {
  const ChooseFilter = (e) => {
    setSearchParams(
      (currentParams) => `${currentParams}&sort_by=${e.target.value}`
    );
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
        <option id="date" value="date">
          Date
        </option>
        <option id="comments" value="comments">
          Comments
        </option>
        <option id="votes" value="votes">
          Votes
        </option>
      </select>
    </form>
  );
}
