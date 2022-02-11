import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

function Movie(props) {
  return (
    <tr key={props.movie.movied}>
      <td>{props.movie.name}</td>
      <td>{props.movie.desc}</td>
      <td>
        <AiFillEdit onClick={() => props.showEditor(props.movie, true)} />
      </td>
      <td>
        <MdDelete onClick={() => props.handleDelete(props.movie.movieId)} />
      </td>
    </tr>
  );
}

export default Movie;
