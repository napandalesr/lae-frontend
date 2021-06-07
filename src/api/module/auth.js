import httpClient from '../httpClient';

const login = async (data) => {
  return await httpClient.post(`${process.env.REACT_APP_API_HOST}/auth/`, data);
};

export {
  login
};
