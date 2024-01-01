import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://api.ecommerce.aviatocreative.com/v1',
    withCredentials: true,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});

export default axiosInstance;
