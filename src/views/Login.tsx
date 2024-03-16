import request from '@/utils/request'
import { useEffect } from 'react'

const Login = () => {
  useEffect(() => {
    request
      .get('xxx', { a: 'hahaha' })
      .then(res => console.log(res, 'ttt'))
      .catch(error => console.log(error))
  }, [])
  return <div>Login</div>
}
export default Login
