import {
  createBrowserRouter,
  useParams,
  redirect,
  useLoaderData
} from 'react-router-dom'

function Goods() {
  const params = useParams()
  const data = useLoaderData()
  console.log('data', data)

  return <div>当前商品的id是：{params.id}</div>
}

function myLoader({ params }) {
  console.log(params)

  console.log(localStorage.getItem('token'))

  if (localStorage.getItem('token') == null) {
    return redirect('/')
  }
  return '12'
}
const router1 = createBrowserRouter(
  [
    {
      path: '/goods/:id',
      element: <Goods />,
      loader: myLoader
    }
  ],
  {
    basename: '/app'
  }
)

export default router1
