import axios from 'axios';

const token = localStorage.getItem('token')

export default axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        Authorization: `Bearer ${token}`
    },
})