import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  NavLink,
  Link,
  useNavigate
} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  const nav = useNavigate()

  return (
    <>
      <div>
        <NavLink to='/test'>
          <img
            src={viteLogo}
            className='logo'
            alt='Vite logo'
          />
        </NavLink>
        <Link to='/react'>
          <img
            src={reactLogo}
            className='logo react'
            alt='React logo'
          />
        </Link>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button
          onClick={() => setCount(count => count + 1)}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p
        className='read-the-docs'
        onClick={() => nav('/react')}
      >
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
