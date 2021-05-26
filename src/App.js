import { useEffect, useState } from "react";
import { getRandomJoke } from "./api/chuck";
import "./App.css";

function App() {
  const [jokes, setJoke] = useState([]);

  async function addRandomJoke() {
    const joke = await getRandomJoke();
    setJoke((jokes) => [...jokes, joke]);
  }

  useEffect(() => {
    addRandomJoke();
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Get Ready for Chuck's fanfics!</h1>
      <ul className="Jokes-list">
        <li className="MORE-Jokes">
          <button onClick={addRandomJoke}>
            MORE!!!!!
          </button>
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
