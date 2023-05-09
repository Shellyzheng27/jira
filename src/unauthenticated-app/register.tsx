import { useAuth } from "context/auth-context";
import React, { FormEvent } from "react";
import { Button, Form, Input } from "antd";

const apiUrl = process.env.REACT_APP_API_URL

export const RegisterScreen = () => {

    const {register, user} = useAuth()

    //HTMLFormElement extends Element
    const handleSubmit = (values: {username: string, password: string}) => {
        register(values)
    }
    // 已改为antd的格式
    return <Form onFinish={handleSubmit}>
        <Form.Item name={'username'} rules={[{required: true, message: 'Please enter username'}]}>
            <Input placeholder={"username"} type="text" id={'username'}/>
        </Form.Item>
        <Form.Item name={'password'} rules={[{required: true, message:'Please enter password'}]}>
            <Input placeholder={"password"} type="password" id={"password"} />
        </Form.Item>
        <Form.Item>
            <Button htmlType={'submit'} type={"primary"}>Sign up</Button>
        </Form.Item>
        
    </Form>
}