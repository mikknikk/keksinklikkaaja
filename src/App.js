import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  console.log('rendering...', counter)

  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>
        🍪
      </button>
      <br />
      <button onClick={() => setCounter(0)}>
        New Game
      </button>
    </div>
  )
}

export default App;
