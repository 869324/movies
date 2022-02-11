import { ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE } from "./Types";

export function addMovie(movie) {
  return {
    type: ADD_MOVIE,
    movie: movie,
  };
}

export function editMovie(movie) {
  return {
    type: EDIT_MOVIE,
    movie: movie,
  };
}

export function deleteMovie(movieId) {
  return {
    type: DELETE_MOVIE,
    movieId: movieId,
  };
}
