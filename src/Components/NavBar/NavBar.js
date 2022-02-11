import { useSelector } from "react-redux";
import "./NavBar.css";

export default function NavBar() {
  const movies = useSelector((state) => state);

  return (
    <nav>
      <label>Guest</label>
      <h2>Movies List</h2>
      <label>No of movies: {movies.length}</label>
    </nav>
  );
}
