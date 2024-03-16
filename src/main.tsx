import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

function Test() {
  return <h2>我是测试啊啊啊啊</h2>
}

ReactDOM.createRoot(
  document.getElementById('root')!
).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='/test' element={<Test />}></Route>
    </Routes>
  </BrowserRouter>
)
