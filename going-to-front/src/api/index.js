import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_BASE_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    Accept: 'application/json',
  },
});
export default axiosInstance;
