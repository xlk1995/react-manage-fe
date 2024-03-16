import { Result, Button } from 'antd'
import { useNavigate } from 'react-router-dom'
const Error404 = () => {
  const navigate = useNavigate()
  const handleBack = () => {
    navigate('/')
  }
  return (
    <div>
      <Result
        status='404'
        subTitle='404 Not Found'
        extra={
          <>
            <Button type='primary' onClick={handleBack}>
              返回首页
            </Button>
          </>
        }
      />
    </div>
  )
}

export default Error404
