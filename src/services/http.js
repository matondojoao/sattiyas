import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://api.ecommerce.aviatocreative.com/v1',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

export default axiosInstance;
