import React from 'react';
import { Layout, Menu, Badge } from 'antd';
import { useSelector } from 'react-redux';
import {
  ShopOutlined,
  HomeOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';

import Logo from "@assets-Project/images/logo.jpg";
import HeaderContent from "@components-Project/Header/index";
import Routes from "@routes-Project/index";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { ROUTES_INTERNAL } from "../../const/internal";

import "./style.scss";

const { Header, Content, Sider } = Layout;

const SiderConten = () => {
  const toolbar = useSelector(state => state.toolbar);
  return<Router>
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
          <Link to={ROUTES_INTERNAL.HOME} className='item'>Inicio</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<ShopOutlined />} >
          <Link to={ROUTES_INTERNAL.USUARIOS} className='item' >Usuarios</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<Badge count={toolbar.notification}><UnorderedListOutlined style={{color:'white' }}/></Badge>}>
          <Link to={ROUTES_INTERNAL.TASK} className='item'>Tareas</Link>
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout className="site-layout" style={{ marginLeft: 200 }}>
      <Header style={{ padding: 0, backgroundColor:'white' }}>
        <HeaderContent/>
      </Header>
      <Content>
        <Routes/>
      </Content>
    </Layout>
  </Layout></Router>;
};

export default SiderConten;