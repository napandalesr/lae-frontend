import httpClient from '../httpClient';

const post = async (data) => {
	return await httpClient.post(`${process.env.REACT_APP_API_HOST}/task/`, data);
};

const getAll = async () => {
  return (await httpClient.get(`${process.env.REACT_APP_API_HOST}/task/`).then(res => res.data));
};

const get = async (id) => {
  return await httpClient.get(`${process.env.REACT_APP_API_HOST}/task/${id}`);
};

const put = async (id, data) => {
  return await httpClient.put(`${process.env.REACT_APP_API_HOST}/task/${id}/`, data);
};

const patch = async (id) => {
  return await httpClient.patch(`${process.env.REACT_APP_API_HOST}/task/${id}`);
};

const remove = async (id) => {
  return await httpClient.delete(`${process.env.REACT_APP_API_HOST}/task/${id}`);
};

export {
  post,
  getAll,
  get,
  put,
  patch,
  remove
};
