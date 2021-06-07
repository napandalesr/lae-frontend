import React from 'react';
import { Table, Typography } from 'antd';
import PropTypes from "prop-types";

const { Title } = Typography;

const UserList=({columns,data})=>{
  

  return <>
  <Title level={2}>lista de Usuarios</Title>
  {
    data!==null &&
    <Table columns={columns} dataSource={data}/>
  }</>;
};

UserList.propTypes={
  columns:PropTypes.array,
  data:PropTypes.array,
};

UserList.defaultProps = {
  columns: [],
  data: [],
};

export default UserList;