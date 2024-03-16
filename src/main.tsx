import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate
} from 'react-router-dom'

function Test() {
  return (
    <h2>
      我是测试啊啊啊啊 <Navigate to='/react'></Navigate>
    </h2>
  )
}

function React() {
  return (
    <h1>
      请好好学习React好吗 <Link to='..'>返回</Link>
    </h1>
  )
}

ReactDOM.createRoot(
  document.getElementById('root')!
).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route
        path='/test'
        element={<Navigate to='/react' />}
      ></Route>

      <Route path='/t1' element={<Test />}></Route>
      <Route path='/react' element={<React />}></Route>
    </Routes>
  </BrowserRouter>
)
