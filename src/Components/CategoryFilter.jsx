import { useEffect, useState } from "react";

import { fetchCategories } from "../api";

export default function CategoryFilter({ searchParams, setSearchParams }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories().then((categoryArray) => {
      setCategories(categoryArray);
    });
  }, []);

  const renderDropdown = () => {
    return categories.map((category, index) => {
      return (
        <option key={index} value={category.slug}>
          {category.slug.toUpperCase()}
        </option>
      );
    });
  };

  const ChooseCategory = (e) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("category", e.target.value);
    setSearchParams(newSearchParams);
  };

  return (
    <form className="reviews-filter">
      <select
        className="category-dropdown"
        name="filters"
        id="category_filter"
        onChange={ChooseCategory}
      >
        <option value="">ALL CATEGORIES</option>
        {renderDropdown()}
      </select>
    </form>
  );
}
