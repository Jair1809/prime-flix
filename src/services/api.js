import axios from "axios";

//Base URL: https://api.themoviedb.org/3
//URL da API: https://api.themoviedb.org/3/movie/550?api_key=ab61e7791bbd8406f46ebfb4f9cbed8f&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

export default api;