import React from 'react';
import { Form, Input, Button } from 'antd';
import { Spin } from 'antd';
import PropTypes from "prop-types";

import Logo from "@assets-Project/images/logo.jpg";
import "./style.scss";


const LoginForm = ({loading, Loguear}) => {

  return <>
  <img src={Logo} />
  <Spin spinning={loading}>
  <Form
      name="basic"
      onFinish={Loguear}
      style={{marginTop:30}}
    >
      <Form.Item
        label="Usuario"
        name="email"
        labelCol={{span:9}}
        rules={[
          {
            required: true, 
            message: 'Ingrese su nombre se usuario!'
          },
        ]}
      >
        <Input type='email'/>
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
    </Spin>
    </>;
};

LoginForm.propTypes = {
  loading: PropTypes.bool,
  Loguear: PropTypes.func
};

LoginForm.defaultProps = {
  loading:false,
  Loguear: ()=>{}
};

export default LoginForm;