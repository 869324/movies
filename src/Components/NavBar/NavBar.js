import { useSelector } from "react-redux";
import { MdMovie } from "react-icons/md";

import "./NavBar.css";

export default function NavBar() {
  const movies = useSelector((state) => state);

  return (
    <nav>
      <MdMovie id="logo" size={56} />
      <h2>Movies List</h2>
      <label>No of movies: {movies.length}</label>
    </nav>
  );
}
