import React from 'react';
import SiderConten from "@containers-Project/Sider/index";
import Login from "@pages-Project/Login/index";

function App() {
  const [auth] = React.useState(true);

  return (
    <div className="App">
      {
        auth ?
        <div >
          <Login />
        </div>
        
        :
        <SiderConten/>
      }
      
    </div>
  );
}

export default App;
