import axios from 'axios';

const token = sessionStorage.getItem('token')

export default axios.create({
    baseURL: 'http://localhost:3000/',
    headers: {
        Authorization: `Bearer ${token}`
    },
})