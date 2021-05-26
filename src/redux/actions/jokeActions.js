import { ADD_JOKE } from "../actionTypes";
import { getRandomJoke } from "../../api/chuck";

export const addJoke = (joke) => ({
  type: ADD_JOKE,
  payload: joke,
});

export const addRandomJoke = () => {
  return (dispatch) => {
    async function fetchJoke() {
      const joke = await getRandomJoke();
      dispatch(addJoke(joke));
    }
    fetchJoke();
  };
};
