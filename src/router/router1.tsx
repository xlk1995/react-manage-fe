import {
  createBrowserRouter,
  Navigate,
  Link
} from 'react-router-dom'
import App from '../App'
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

function NotFound() {
  return <h1>找不到该资源~~~~~</h1>
}

function Apple() {
  return <h1>我是一个苹果111</h1>
}
const router1 = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/test',
    element: <Navigate to='/react' />
  },
  {
    path: '/t1',
    element: <Test />
  },
  {
    path: '/react',
    element: <React />
  },
  {
    path: '/apple',
    element: <Apple />
  },
  {
    path: '*',
    element: <NotFound />
  }
])

export default router1
