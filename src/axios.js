import axios from "axios";

// URL BASE
const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3"
});
export default instance;