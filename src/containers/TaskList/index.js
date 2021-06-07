import React from 'react';
import { Table, Space, Input, Typography } from 'antd';
import ModalContent from "@components-Project/Modal/index";
import PropTypes from "prop-types";

const { Search } = Input;
const { Title } = Typography;

const TaskList=({columns,data,onSearch, isModalVisible, showModal,handleOk, handleCancel,editTask,setEditTask})=>{//onClick={showModal}
  

  return <>
  <Title level={2}>lista de quehaceres</Title>
  <ModalContent 
  isModalVisible={isModalVisible}
  showModal={showModal}
  handleOk={handleOk}
  handleCancel={handleCancel}
  editTask={editTask}
  setEditTask={setEditTask}
  />
  <Space direction="vertical" style={{width:'100%'}}>
    <Search
      placeholder="Nombre.."
      allowClear
      enterButton="Añadir item"
      size="large"
      onSearch={onSearch}
    />
  </Space>
  {
    data!==null &&
    <Table columns={columns} dataSource={data}/>
  }</>;
};

TaskList.propTypes={
  editTask:PropTypes.string,
  setEditTask:PropTypes.func,
  columns:PropTypes.array,
  data:PropTypes.array,
  onSearch:PropTypes.func,
  isModalVisible:PropTypes.bool,
  showModal:PropTypes.func,
  handleOk:PropTypes.func,
  handleCancel:PropTypes.func,
};

TaskList.defaultProps = {
  editTask: '',
  setEditTask:()=>{},
  columns: [],
  data: [],
  onSearch: ()=>{},
  isModalVisible:false,
  showModal:()=>{},
  handleOk:()=>{},
  handleCancel:()=>{}
};

export default TaskList;