
const URL_BASE = 'http://localhost:3001/api';

const TemperamentsAPI = `${URL_BASE}/temperaments`;

const TheDogAPI = `${URL_BASE}/dogs`;

const TheDogAPIByNAME = `${TheDogAPI}/name?value=`;


export {
    TheDogAPI,
    TheDogAPIByNAME,
    TemperamentsAPI
}