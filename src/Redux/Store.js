import { createStore } from "redux";
import { movieReducer } from "./Reducers";

const store = createStore(movieReducer);
export default store;
