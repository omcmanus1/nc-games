import { useParams } from "react-router-dom";
import Reviews from "./Reviews";

export default function ReviewsByCategory() {
  const { category_name } = useParams();

  return (
    <>
      <h2>{category_name}</h2>
      <Reviews category_name={`category=${category_name}`} />
    </>
  );
}
