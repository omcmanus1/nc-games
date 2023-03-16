export default function ReviewsFilter() {
  const ChooseFilter = (e) => {
    return e.target.value;
  };

  return (
    <form className="reviews-filter">
      <label className="dropdown-label" htmlFor="filter-reviews">
        Filter By:
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
        <option id="category" value="Category">
          Category
        </option>
        <option id="owner" value="Owner">
          Owner
        </option>
      </select>
    </form>
  );
}
