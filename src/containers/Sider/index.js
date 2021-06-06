import React from 'react';
import { Layout, Menu } from 'antd';
import {
  ShopOutlined,
  HomeOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';

import "./style.scss";
import Logo from "@assets-Project/images/logo.jpg";
import HeaderContent from "@components-Project/Header/index";
import Home from "@pages-Project/Home/index";

const { Header, Content, Sider } = Layout;

const SiderConten = () => {
  return<>
  <Layout>
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
      <img src={Logo} style={{textAlign:'center', margin: 'auto', display:'block'}} />
      <Menu mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1" icon={<HomeOutlined />}>
          Inicio
        </Menu.Item>
        <Menu.Item key="2" icon={<ShopOutlined />}>
          Usuarios
        </Menu.Item>
        <Menu.Item key="3" icon={<UnorderedListOutlined />}>
          Tareas
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout className="site-layout" style={{ marginLeft: 200 }}>
      <Header style={{ padding: 0, backgroundColor:'white' }} >
        <HeaderContent/>
      </Header>
      <Content>
        <Home/>
      </Content>
    </Layout>
  </Layout></>;
};

export default SiderConten;