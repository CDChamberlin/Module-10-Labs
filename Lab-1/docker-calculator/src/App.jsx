import { useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import CalculatorApp from './calcFolder/CalculatorApp'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CalculatorApp />
      <footer>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      </footer>
    </>
  )
}

export default App
