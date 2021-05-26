import { ADD_JOKE } from "../actionTypes";

const jokesReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_JOKE:
      return { ...state, jokes: [...state.jokes, action.payload] };

    default:
      return state;
  }
};

export default jokesReducer;
