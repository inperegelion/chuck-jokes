import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import jokesReducer from "./reducers/jokesReducer";

export default createStore(
  jokesReducer,
  { jokes: [] },
  applyMiddleware(thunkMiddleware)
);
