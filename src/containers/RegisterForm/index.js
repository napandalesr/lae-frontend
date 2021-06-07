import React from 'react';
import PropTypes from 'prop-types';

import { Form, Input, Button } from 'antd';

const RegisterForm = ({onFinish}) => {

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
          () => ({
            validator(_, value) {
              var numeros="0123456789";
              for(let i=0; i<value.length; i++){
                if (numeros.indexOf(value.charAt(i),0)!=-1){
                  return Promise.resolve();
                  
                }
              }
              return Promise.reject('Ingrese al menos un números!');
            },
          }),
          () => ({
            validator(_, value) {
              var numeros="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
              for(let i=0; i<value.length; i++){
                if (numeros.indexOf(value.charAt(i),0)!=-1){
                  return Promise.resolve();
                  
                }
              }
              return Promise.reject('Ingrese al menos una letra mayúsla!');
            },
          }),
          () => ({
            validator(_, value) {
              if (!value || value.length >= 6) {
                return Promise.resolve();
              }
              return Promise.reject('Ingrese mínimo 7 carácteres!');
            },
          }),
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
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject('La contraseña no coincide!');
            },
          }),
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

RegisterForm.propTypes = {
  onFinish: PropTypes.func
};

RegisterForm.defaultProps = {
  onFinish: ()=>{}
};

export default RegisterForm;