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
      <h1>Get Ready for Chuck's fanfics!</h1>
      <ul>
        <li>
          <button onClick={addRandomJoke}>MORE!!!!!</button>
        </li>
        {jokes.map((joke) => (
          <li key={joke}>{joke}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
