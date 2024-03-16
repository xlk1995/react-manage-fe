import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router1 from './router/router1'

ReactDOM.createRoot(
  document.getElementById('root')!
).render(<RouterProvider router={router1}></RouterProvider>)
