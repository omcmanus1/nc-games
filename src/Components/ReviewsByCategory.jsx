import { useParams } from "react-router-dom";
import Reviews from "./Reviews";

export default function ReviewsByCategory() {
  const category_name = useParams();
  console.log(category_name);

  return (
    <>
      <h2>{category_name}</h2>
      <Reviews category_name={category_name} />
    </>
  );
}
