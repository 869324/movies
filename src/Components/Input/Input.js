import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";

import "./Input.css";
import { addMovie } from "../../Redux/Actions";

function Input(props) {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  function getRandomId() {
    const id = Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
    const index = movies.findIndex((movie) => movie.movieId == id);
    if (index > -1) {
      getRandomId();
    } else {
      return id;
    }
  }

  function add(event) {
    event.preventDefault();

    dispatch(
      addMovie({
        movieId: getRandomId(),
        name: name,
        desc: desc,
      })
    );

    setName("");
    setDesc("");
  }

  return (
    <div>
      <h2>Add Movie</h2>
      <form onSubmit={add}>
        <div className="inputs">
          <label className="inputLabel">Name</label>
          <input
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Enter Name"
          />
        </div>
        <div className="inputs">
          <label className="inputLabel">Description</label>
          <input
            className="input"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
            placeholder="Enter Description"
          />
        </div>

        <div className="inputs">
          <button id="add">Add</button>
        </div>
      </form>
    </div>
  );
}

export default Input;
