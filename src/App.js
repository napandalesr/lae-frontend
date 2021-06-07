import React from 'react';
import SiderConten from "@containers-Project/Sider/index";
import Login from "@pages-Project/Login/index";
import { IsLoggedIn } from "./utils/helpers";

function App() {
  const [auth] = React.useState(IsLoggedIn());

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
