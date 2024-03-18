import ReactDOM from 'react-dom/client'
import './index.scss'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import { ConfigProvider } from 'antd'

ReactDOM.createRoot(
  document.getElementById('root')!
).render(
  <ConfigProvider
    theme={{
      token: {
        // Seed Token，影响范围大
        colorPrimary: '#00b96b',
        borderRadius: 2,
        // 派生变量，影响范围小
        colorBgContainer: '#f6ffed'
      }
    }}
  >
    <RouterProvider router={router}></RouterProvider>
  </ConfigProvider>
)
