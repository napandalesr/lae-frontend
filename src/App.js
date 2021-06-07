import React from 'react';
import { useDispatch } from 'react-redux';

import SiderConten from "@containers-Project/Sider/index";
import Login from "@pages-Project/Login/index";
import { getAll } from "@api-Project/module/task";
import { IsLoggedIn } from "./utils/helpers";
import { _notifications } from '@redux-Project/actions/toolbarAction';

function App() {
  const [auth] = React.useState(IsLoggedIn());
  const dispatch = useDispatch();

  React.useEffect(async()=>{
    const response = await getAll();
    dispatch(_notifications(response.length));
  });

  return (
    <div className="App">
      {
        auth ?
        <div >
          <SiderConten/>
        </div>
        :
        <Login />
      }
      
    </div>
  );
}

export default App;
