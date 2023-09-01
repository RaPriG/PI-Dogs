require('dotenv').config();

const { API_KEY } = process.env;

const headers = { "x-api-key": API_KEY }

const TheDogAPI = 'https://api.thedogapi.com/v1/breeds';

const TheDogAPISearch = `${TheDogAPI}/search?q=`;



module.exports = {
    headers,
    TheDogAPI,
    TheDogAPISearch
}


