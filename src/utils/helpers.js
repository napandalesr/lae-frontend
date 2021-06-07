import httpClient from "../api/httpClient";
import { notification } from 'antd';

export function IsLoggedIn(){
  return window.localStorage['access_token'] !== undefined;
}

export function setUserSession(session_data) {
  let user_data = session_data.data.user;

  window.localStorage['access_token'] = user_data.stsTokenManager.accessToken;
  window.localStorage['email'] = user_data.email;
  window.location.reload();
}

export function LogOut(){
    window.localStorage.clear();
    window.location = '/';
}

export const verifyToken = async () => {
  try {
    if(navigator.onLine) {
      let token = window.localStorage.access_token;
      await httpClient.post("/token/verify/", { token });
      } else {
        notification.success({
          message: "No tiene conexión",
          description: "Compruebe su conexión a internet",
          duration: 2,
        });
      }
  }
  catch(err) {
    console.log(err);
    window.localStorage.clear();
    window.location.reload();
  }
};
