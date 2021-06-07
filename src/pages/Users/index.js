import React from 'react';
import { notification, Spin, Space, Popconfirm } from 'antd';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import { getAll, remove } from "@api-Project/module/users";
import UserList from "@containers-Project/UserList/index";
import { put } from '../../api/module/task';


const Users = () =>{
  const [data,setData]=React.useState(null);
  const [loading,setLoading]=React.useState(false);
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [editTask, setEditTask] = React.useState('');
  const [idEditTask, setIdEditTask] = React.useState();

  

  const showModal = (name,id) => {
    setIdEditTask(id);
    setEditTask(name);
    setIsModalVisible(true);
  };

  const handleOk = async() => {
    console.log(editTask);
    try {
      const response= await put(idEditTask,{name:editTask});
      if ([200, 201, 204].indexOf(response.status) > -1) {
        let newData=data.filter(item=>item.key!==idEditTask);
        newData=[...newData,{name:editTask,key:idEditTask}];
        setData(newData);
        notification.success({
          message: "Usuario editado correctamente",
          duration: 2,
        });
        setTimeout(() => { 
          setLoading(false);
        }, 2);
      }
    } catch (error) {
      console.log('Error '+error);
      setLoading(false);
    }
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  React.useEffect(()=>{
    getData();
  },[]);
  const columns = [
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Apellidos',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'Correo',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Acciones',
      key: 'action',
      render: (record) => (
        <Space size="middle">
          <Popconfirm
            title="Está seguro?"
            onConfirm={async()=>{
              try {
                const response=await remove(record.key);
                if ([200, 201, 204].indexOf(response.status) > -1) {
                  setData(data.filter(item=>item.key!==record.key));
                  notification.success({
                    message: "Tarea eliminada correctamente",
                    duration: 2,
                  });
                  setTimeout(() => { 
                    setLoading(false);
                  }, 2);
                }
              } catch (error) {
                console.log('Error '+error);
                setLoading(false);
              }
              
            }}
            okText="Si"
            cancelText="No"
          >
            <a href="#"><HighlightOffIcon style={{color:'red'}}/></a>
          </Popconfirm>
        </Space>
      ),
    }
  ];

  const getData = async() => {
    setLoading(true);
    try {
      let response;
      response= await getAll();
      console.log(response);
      setData(response);
      setLoading(false);
    } catch (error) {
      console.log('Error '+error);
      setLoading(false);
    }
  };
  return <div style={{padding:30}}>
    
  <Spin spinning={loading} >
    <UserList 
    columns={columns} 
    data={data} 
    isModalVisible={isModalVisible}
    showModal={showModal}
    handleOk={handleOk}
    handleCancel={handleCancel}
    editTask={editTask}
    setEditTask={setEditTask}
    />
  </Spin>
  </div>;
};

export default Users;