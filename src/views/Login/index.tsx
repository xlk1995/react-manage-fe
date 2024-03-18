import './login.scss'
import { Form, Button, FormProps, Input } from 'antd'
type FieldType = {
  username?: string
  password?: string
  remember?: string
}
const onFinish: FormProps<FieldType>['onFinish'] =
  values => {
    console.log('Success:', values)
  }
const Login = () => {
  return (
    <div className='login-wrapper'>
      <div className='login_form'>
        <Form
          name='basic'
          onFinish={onFinish}
          autoComplete='off'
        >
          <Form.Item<FieldType>
            name='username'
            rules={[
              {
                required: true,
                message: 'Please input your username!'
              }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            name='password'
            rules={[
              {
                required: true,
                message: 'Please input your password!'
              }
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type='primary' htmlType='submit' block>
              login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
export default Login
