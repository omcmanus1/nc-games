import { useParams } from "react-router-dom";

export default function ReviewsByCategory() {
  const { category_name } = useParams();
  return <h2>{category_name}</h2>;
}
