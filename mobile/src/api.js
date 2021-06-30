import axios from 'axios';
// Next we make an 'instance' of it
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';


const instance = axios.create({
    baseURL: 'http://localhost:5000/',
});

export default instance;