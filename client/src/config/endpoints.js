
const URL_BASE = 'https://pruebaserver-gd8u.onrender.com/api';

const TemperamentsAPI = `${URL_BASE}/temperaments`;

const TheDogAPI = `${URL_BASE}/dogs`;

const TheDogAPIByNAME = `${TheDogAPI}/name?value=`;


export {
    TheDogAPI,
    TheDogAPIByNAME,
    TemperamentsAPI
}