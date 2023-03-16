import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { fetchCategories } from "../api";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetchCategories().then((categoryArray) => {
      setCategories(categoryArray);
    });
  }, []);

  const renderCategories = () => {
    return categories.map((category, index) => {
      return (
        <Link key={category.slug} to={`/reviews/category/${category.slug}`}>
          <li key={index} className="word-art">
            {category.slug}
          </li>
        </Link>
      );
    });
  };

  return (
    <>
      <h1>CATEGORIES</h1>
      <ul>{renderCategories()}</ul>
    </>
  );
}
