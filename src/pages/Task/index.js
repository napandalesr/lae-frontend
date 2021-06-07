import React from 'react';
import { Space,notification, Spin, Popconfirm } from 'antd';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import EditIcon from '@material-ui/icons/Edit';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { useDispatch, useSelector } from 'react-redux';

import { getAll, post } from "@api-Project/module/task";
import TaskList from "@containers-Project/TaskList/index";
import { remove,put } from '../../api/module/task';
import { _notificationsSum,_notificationsRest } from '@redux-Project/actions/toolbarAction';


const Task = () =>{
  const toolbar = useSelector(state => state.toolbar);
  const dispatch = useDispatch();

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
          message: "Tarea editada correctamente",
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

  const onSearch = async value =>{
    setLoading(true);
    try {
      let response;
      response= await post({name:value});
      if ([200, 201, 204].indexOf(response.status) > -1) {
        setData([...data,{name:value,key:response.data.id}]);
        dispatch(_notificationsSum(toolbar.notification));
        notification.success({
          message: "Tarea creada correctamente",
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
  };

  React.useEffect(()=>{
    getData();
  },[]);
  const columns = [
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name',
      width:'80%'
    },
    {
      title: 'Acciones',
      key: 'action',
      render: (record) => (
        <Space size="middle">
          <a><CheckCircleOutlineIcon/></a>
          <a onClick={()=>showModal(record.name,record.key)}><EditIcon/></a>
          <Popconfirm
            title="Está seguro?"
            onConfirm={async()=>{
              try {
                const response=await remove(record.key);
                if ([200, 201, 204].indexOf(response.status) > -1) {
                  dispatch(_notificationsRest(toolbar.notification));
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
    },
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
    <TaskList 
    columns={columns} 
    data={data} 
    onSearch={onSearch} 
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

export default Task;