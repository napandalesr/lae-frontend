import React from 'react';

import { Form, Input, Button } from 'antd';

const RegisterForm = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  return <>
  <Form
      name="basic"
      onFinish={onFinish}
      layout= 'vertical'
    >
      <Form.Item
        label="Nombre(s)"
        name="name"
        rules={[
          {
            required: true,
            message: 'El campo es obligatorio!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Apellidos"
        name="lastName"
        rules={[
          {
            required: true,
            message: 'El campo es obligatorio!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Correo"
        name="email"
        rules={[
          {
            required: true,
            message: 'El campo es obligatorio!',
          },
        ]}
      >
        <Input type='email'/>
      </Form.Item>
      <Form.Item
        label="Contraseña"
        name="password"
        rules={[
          {
            required: true,
            message: 'El campo es obligatorio!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="Confirme su contraseña"
        name="passwordConfirm"
        rules={[
          {
            required: true,
            message: 'El campo es obligatorio!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Guardar
        </Button>
      </Form.Item>
    </Form>
  </>;
};

export default RegisterForm;