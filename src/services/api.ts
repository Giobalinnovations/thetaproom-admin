import axios from 'axios';

const axiosInstance = axios.create({
  // baseURL: 'https://8nmsem43nx.ap-southeast-2.awsapprunner.com/api/v1/',
  baseURL: 'http://localhost:8090/api/v1/',
  timeout: 40000,
});

export default axiosInstance;
