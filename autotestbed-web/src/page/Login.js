import React from 'react'
import { Form, Input, Button, Checkbox, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import "./login.css"

function Login() {
    const onFinish = values => {
        console.log('Received values of form: ', values);
    };
    
    return (
        <Card title="自动化测试平台" className="login-card">
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item
                name="username"
                rules={[{ required: true, message: '请输入正确的账户名/邮箱' }]}
                >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入账户名/邮箱" />
                </Form.Item>
                <Form.Item
                name="password"
                rules={[{ required: true, message: '请输入正确的密码' }]}
                >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="请输入密码"
                />
                </Form.Item>
                <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>记住密码</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                    忘记密码？
                </a>
                </Form.Item>

                <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    登  录
                </Button>
                </Form.Item>
            </Form>
    </Card>
    )
}

export default Login;
