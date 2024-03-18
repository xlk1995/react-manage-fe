import {
  createBrowserRouter,
  Navigate
} from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
import Welcome from '@/views/Welcome'
import Login from '@/views/Login'
import Error403 from '@/views/Error403'
import Error404 from '@/views/Error404'

const routers: RouteObject[] = [
  {
    path: '/',
    element: <Welcome />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '*',
    element: <Navigate to='/404' />
  },
  {
    path: '/404',
    element: <Error404 />
  },
  {
    path: '403',
    element: <Error403 />
  }
]

export default createBrowserRouter(routers)
