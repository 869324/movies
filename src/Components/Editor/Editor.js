import styles from "./Editor.module.css";
import { editMovie } from "../../Redux/Actions";

import { useState } from "react";
import { useDispatch } from "react-redux";
import swal from "sweetalert";

export default function Editor(props) {
  const dispatch = useDispatch();
  const [name, setName] = useState(props.movie.name);
  const [desc, setDesc] = useState(props.movie.desc);

  function submit(event) {
    event.preventDefault();

    dispatch(
      editMovie({
        movieId: props.movie.movieId,
        name: name,
        desc: desc,
      })
    );

    props.setEditor(false);

    swal("Task has been updated!", {
      icon: "success",
    });
  }

  return (
    <div className={styles.editor}>
      <div className={styles.content}>
        <button id={styles.closeBtn} onClick={() => props.setEditor(false)}>
          +
        </button>
        <h2>Edit Movie: {props.movie.movieId}</h2>
        <form id={styles.form} onSubmit={submit}>
          <input
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className={styles.input}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
          />
          <button id={styles.editBtn}>Edit</button>
        </form>
      </div>
    </div>
  );
}
