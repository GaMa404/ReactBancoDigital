import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8000",
    method: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers':  'Origin, Content-Type, Accept', 
        'Content-Type': 'application/json'
    }
});

export default api;

