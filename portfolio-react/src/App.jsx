import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Hola, bienvenid@ a mi primer proyecto en React 💪🏻</h1>
      <p>Este es un contador</p>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Aumentar</button>
    </div>
  )
}

export default App
