//import axios
import axios from "axios";

const Api = axios.create({
    //set default endpoint API
    baseURL: 'http://localhost:3000',
    timeout: 10000, // 10 detik timeout request
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
})

export default Api