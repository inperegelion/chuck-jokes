import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addRandomJoke } from "./redux/actions/jokeActions";
import "./App.css";

function App() {
  const jokes = useSelector((state) => state.jokes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addRandomJoke());
  }, [dispatch]);

  return (
    <div className="App">
      <h1 className="Header">Get Ready for Chuck's fanfics!</h1>
      <ul className="Jokes-list">
        <li className="MORE-Jokes">
          <button onClick={(ev) => dispatch(addRandomJoke())}>MORE!!!!!</button>
        </li>
        {jokes.map((joke) => (
          <li className="Joke-item" key={joke}>
            {joke}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
