import axios from 'axios';

const token = localStorage.getItem('token')

console.log(token)

export default axios.create({
    baseURL: 'http://localhost:3000/',
    headers: {
        Authorization: `Bearer ${token}`
    },
})