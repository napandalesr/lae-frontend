import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Card,Button, notification } from 'antd';

import LoginForm from "@containers-Project/LoginForm/index";
import RegisterForm from "@containers-Project/RegisterForm/index";
import { post } from "@api-Project/module/registerUser";
import { setUserSession } from "../../utils/helpers";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(40),
      height: theme.spacing(70),
    },
  },
}));


const Login = () => {
  const classes = useStyles();
  const [state,setState]=React.useState({
    key: 'tab1',
    noTitleKey: 'app',
  });
  const [loading,setLoading]=React.useState(false);

  const save = async(data) => {
    setLoading(true);
    try {
      let response;
      data.displayName=data.name;
      response= await post(data);
      if ([200, 201, 204].indexOf(response.status) > -1) {
        setUserSession(response);
        notification.success({
          message: "Usuario creado correctamente",
          duration: 2,
        });
        setTimeout(() => { 
          //history.push(INTERNAL_LINKS.AREAS); 
          setLoading(false);
        }, 2);
      }
    } catch (error) {
      console.log('Error '+error);
      setLoading(false);
    }
  };

  const contentList = {
    tab1: <LoginForm loading={loading}/>,
    tab2: <RegisterForm onFinish={save} loading={loading}/>,
  };

  const tabList = [
    {
      key: 'tab1',
      tab: <Button style={{width:90, marginLeft:30, border:'none', backgroundColor:'#424242', color: 'white'}}>Iniciar sesión</Button>,
    },
    {
      key: 'tab2',
      tab: <Button style={{width:80,  border:'none', backgroundColor:'#424242', color: 'white'}}>Registrarse</Button>,
    },
  ];


  const onTabChange = (key, type) => {
    setState({ [type]: key });
  };

  return <div className={classes.root} style={{width:'100%', height: '100vh', background:'linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 10%, rgba(0,212,255,1) 100%)'}}>
      <Paper elevation={3} style={{textAlign:'center', margin:'auto', backgroundColor:'#424242'}}>
      <Card
          style={{ width: '100%', backgroundColor:'#424242', border:'none' }}
          tabList={tabList}
          activeTabKey={state.key}
          onTabChange={key => {
            onTabChange(key, 'key');
          }}
        >
          {contentList[state.key]}
        </Card>
      </Paper>
    </div>;
};

export default Login;