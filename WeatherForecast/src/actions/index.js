import Axios from 'axios';

const API_KEY = '6a78596d062df78380eff5944c4e5567';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    // Using units=metric returns temperatures in Celcius
    const url = `${ROOT_URL}&q=${city}&units=metric`;
    const req = Axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: req            // return the promise as payload
    };
}