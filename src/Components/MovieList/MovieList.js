import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import swal from "sweetalert";

import "./MovieList.css";
import Movie from "../Movie/Movie";
import Editor from "../Editor/Editor";
import { deleteMovie } from "../../Redux/Actions";
import Input from "../Input/Input";

function MovieList(props) {
  const movies = useSelector((state) => state);
  const dispatch = useDispatch();
  const [editor, setEditor] = useState(false);
  const [movie, setMovie] = useState({});

  function showEditor(movie, status) {
    setMovie(movie);
    setEditor(status);
  }

  function handleDelete(movieId) {
    swal({
      title: "Are you sure?",
      text: "Once deleted this movie cannot be recovered!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteMovie(movieId));

        swal("Movie has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Deletion aborted!");
      }
    });
  }

  return (
    <div
      className="home"
      style={{ backgroundImage: "url(images/background.jpg)" }}
    >
      <div className="inputDiv">
        <Input />
      </div>

      <div className="movieList">
        {editor && <Editor movie={movie} setEditor={setEditor} />}
        <h2>Movies</h2>
        <table>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          {movies.map((movie, id) => {
            return (
              <Movie
                movie={movie}
                id={id + 1}
                handleDelete={handleDelete}
                showEditor={showEditor}
              />
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default MovieList;
