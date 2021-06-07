import React from 'react';
import { Avatar, Popover } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';

import { LogOut } from "@utils-Project/helpers";

import "./style.scss";

const HeaderContent = () => {

  const content=()=>(<a href='#' onClick={()=>LogOut()}>Salir</a>);
  return <div className='header'>
  <a href='#'>
    <Popover placement="bottom" title='Perfil' content={content} trigger="click">
      <Avatar size={50} icon={<UserOutlined />} />
    </Popover>
  </a>
  <p style={{margin:'auto'}}>
    <a href='#' style={{margin:'auto 5px'}}><SearchIcon style={{fontSize:23}}/></a>
    <a href='#' style={{margin:'auto 5px'}}><NotificationsIcon style={{fontSize:23}}/></a>
    <span style={{margin:'auto 5px',fontSize:20}}>(0) Carlos</span>
  </p>
  </div>;

  
};

export default HeaderContent;