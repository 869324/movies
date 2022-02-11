import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

import "./Movie.css";

function Movie(props) {
  return (
    <tr key={props.movie.movied}>
      <td>{props.id}</td>
      <td>{props.movie.name}</td>
      <td>{props.movie.desc}</td>
      <td>
        <AiFillEdit
          className="edit"
          onClick={() => props.showEditor(props.movie, true)}
        />
      </td>
      <td>
        <MdDelete
          className="delete"
          onClick={() => props.handleDelete(props.movie.movieId)}
        />
      </td>
    </tr>
  );
}

export default Movie;
