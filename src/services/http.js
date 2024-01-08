import axios from 'axios';
axios.defaults.withCredentials = true;
const axiosInstance = axios.create({
    baseURL: 'https://api.ecommerce.aviatocreative.com/v1',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

export default axiosInstance;
