import { ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE } from "./Types";

export const movieReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_MOVIE: {
      return [...state, action.movie];
    }

    case EDIT_MOVIE: {
      const newState = [...state];
      const index = newState.findIndex(
        (movie) => movie.movieId == action.movie.movieId
      );
      newState.splice(index, 1, action.movie);
      return newState;
    }

    case DELETE_MOVIE: {
      const newState = [...state];
      const index = newState.findIndex(
        (movie) => movie.movieId == action.movieId
      );
      newState.splice(index, 1);
      return newState;
    }

    default:
      return [...state];
  }
};
