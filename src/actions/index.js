import axios from 'axios';

const API_KEY = '9fd0e22509e97a5d9d5f6f52cbee4053';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},de`;
    console.log(url);
    const request = axios.get(url, {withCredentials:false});

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}