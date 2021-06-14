import { ADD_JOKE_SUCCESS } from "./actionTypes";

const jokesReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_JOKE_SUCCESS:
      return { ...state, jokes: [...state.jokes, action.payload] };

    default:
      return state;
  }
};

export default jokesReducer;
