import React from 'react';
import { Form, Input, Button } from 'antd';


import Logo from "@assets-Project/images/logo.jpg";
import "./style.scss";


const LoginForm = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  return <>
  <img src={Logo} />
  <Form
      name="basic"
      onFinish={onFinish}
      style={{marginTop:30}}
    >
      <Form.Item
        label="Usuario"
        name="username"
        rules={[{ required: true, message: 'Ingrese su nombre se usuario!' }]}
        labelCol={{span:9}}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Constraseña"
        name="password"
        rules={[{ required: true, message: 'Ingrese su contraseña!' }]}
        labelCol={{span:9}}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Iniciar
        </Button>
      </Form.Item>
    </Form>
    </>;
};

export default LoginForm;