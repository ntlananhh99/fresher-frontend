import axios from 'axios';

// config hosting-api here
export const baseURL = 'http://localhost:3000/todo';
export const api = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
});
