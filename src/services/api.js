import axios from 'axios';

const api = axios.create({
    baseURL: "https://fashionista-api.surge.sh/products.json"
})

export default api;