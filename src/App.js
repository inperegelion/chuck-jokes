import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import { ADD_JOKE } from './redux/actionTypes'

function App() {
  const jokes = useSelector((state) => state.jokes)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: ADD_JOKE })
  }, [dispatch])
  
  return (
    <div className="App">
      <h1 className="Header">Get Ready for Chuck's fanfics!</h1>
      <ul className="Jokes-list">
        <li className="MORE-Jokes" key="more-joke-btn">
          <button onClick={(ev) => dispatch({ type: ADD_JOKE })}>
            MORE!!!!!
          </button>
        </li>
        {jokes.map((joke, i) => (
          <li className="Joke-item" key={joke || `joke-${i}`}>
            {joke}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
