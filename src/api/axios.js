import axios from "axios"


const instance = axios.create({
    baseURL: "http://api.themoviedb.org/3",
    params: {
        api_key: "52790e64f0587c7f2999a7f579752d97",
        language: "ko_KR"
    }
});

export default instance;
