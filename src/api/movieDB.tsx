import axios from "axios";


const movieDB = axios.create({
    baseURL:`https://api.themoviedb.org/3/movie`,
    params:{
        api_key:'bc935850392bf0fefdd95c4de09a6468',
        language: 'en-ES'
    }
});

export default movieDB;