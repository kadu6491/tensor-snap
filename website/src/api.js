import axios from "axios";

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const instance = axios.create({
    baseURL: 'http://192.168.172.146/',
    // baseURL: 'http://127.0.0.1:5000/'
})

export default instance;