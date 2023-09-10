const axios = require('axios');
const { TheDogAPI, TheDogAPISearch, headers } = require('../../config');

// Función para hacer una solicitud a una API externa
const allDogsFromAPI = async () => {
    try {
        const response = await axios(TheDogAPI, { headers });

        if (!response?.data || !response.data?.length) {
            return { response: false, status: 204, message: "API Not Data" };
        }
        return response.data;
    } catch (error) {
        return { response: false, status: 500, error: error };
    }
};

const dogsByNameFromAPI = async (name) => {
    try {
        console.log(`${TheDogAPISearch}${name}`);
        const response = await axios(`${TheDogAPISearch}${name}`, { headers });
        if (!response?.data || !response.data?.length) {
            return { response: false, status: 204, message: "API Not Data" };
        }
        return response.data;
    } catch (error) {
        return { response: false, status: 500, error: error };
    }
};


module.exports = {
    allDogsFromAPI,
    dogsByNameFromAPI
};