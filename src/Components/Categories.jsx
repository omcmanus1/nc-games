import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { fetchCategories } from "../api";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchCategories().then((categoryArray) => {
      setCategories(categoryArray);
      setIsLoading(false);
    });
  }, []);

  const renderCategories = () => {
    return categories.map((category, index) => {
      return (
        <Link key={category.slug} to={`/reviews?category=${category.slug}`}>
          <li key={index} className="word-art">
            {category.slug}
          </li>
        </Link>
      );
    });
  };

  return (
    <>
      <h1 className="page-header">CATEGORIES</h1>
      {isLoading ? <h2>Loading...</h2> : null}
      <ul>{renderCategories()}</ul>
    </>
  );
}
