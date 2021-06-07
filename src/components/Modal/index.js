import React from 'react';
import { Modal,Input } from 'antd';
import PropTypes from "prop-types";

const ModalContent=({isModalVisible,handleOk,handleCancel,editTask,setEditTask})=>{
  return (
    <>
      <Modal title="Editar" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <label>Nombre:</label>
        <Input value={editTask} onChange={(e)=>setEditTask(e.target.value)}/>
      </Modal>
    </>
  );
};

ModalContent.propTypes = {
  editTask:PropTypes.string,
  setEditTask:PropTypes.func,
  isModalVisible:PropTypes.bool,
  handleOk:PropTypes.func,
  handleCancel:PropTypes.func,
};

ModalContent.defaultProps = {
  editTask: '',
  setEditTask:()=>{},
  isModalVisible:false,
  handleOk:()=>{},
  handleCancel:()=>{}
};

export default ModalContent;