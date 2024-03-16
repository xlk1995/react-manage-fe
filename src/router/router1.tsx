import {
  createBrowserRouter,
  Navigate,
  Link,
  useParams,
  Outlet
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

function Goods() {
  const params = useParams()

  return (
    <div>
      当前商品的id是：{params.id}, 订单id是：
      {params.orderId}
    </div>
  )
}

function GoodsList() {
  return (
    <div>
      我是商品列表
      <Outlet />
    </div>
  )
}
const router1 = createBrowserRouter(
  [
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
      path: 'goods/:id/order/:orderId',
      element: <Goods />
    },

    {
      path: '/goods1',
      element: <GoodsList />,
      children: [
        {
          path: 'product',
          element: <div>我是产品</div>
        },
        {
          path: 'order',
          element: <div>我是订单</div>
        }
      ]
    },
    {
      path: '*',
      element: <NotFound />
    }
  ],
  {
    basename: '/app'
  }
)

export default router1
