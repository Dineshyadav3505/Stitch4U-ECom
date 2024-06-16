import axios from "axios";

 const instance = axios.create({
    baseURL:'http://localhost:4567/api/v1',
 })

 export default instance;