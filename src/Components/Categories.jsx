import { useEffect, useState } from "react";
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
      return <li key={index}>{category.slug}</li>;
    });
  };

  return (
    <>
      <h1>CATEGORIES</h1>
      <ul className="word-art">{renderCategories()}</ul>
    </>
  );
}
