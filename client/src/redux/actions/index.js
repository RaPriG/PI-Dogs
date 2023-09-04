import axios from 'axios';
import { ALL_DOGS, ALL_TEMPERAMENTS, FILTER_DOGS } from './types';
import { TheDogAPI, TemperamentsAPI } from '../../config/endpoints';


const all_dogs = () => {
    return (dispatch) => {
        axios(TheDogAPI)
            .then(({ data }) => {
                return dispatch({
                    type: ALL_DOGS,
                    payload: data
                });
            })
            .catch(error => {
                return { error: error }
            })
    }
}

const filter_dogs = (datos) => {
    console.log("DATA FILTER:", datos);
    return (dispatch) => {
        axios(TheDogAPI)
            .then(({ data }) => {
                
                const busqedaDog = data.filter((dog) => {
                    return (datos.name.trim() !== '')
                        ? dog.name.toLowerCase().includes(datos.name.toLowerCase())
                        : dog;
                });

                return dispatch({
                    type: FILTER_DOGS,
                    payload: busqedaDog,
                });
            })
            .catch(error => {
                return { error: error }
            })
    }
}

const all_temperaments = () => {
    return (dispatch) => {
        axios(TemperamentsAPI)
            .then(({ data }) => {
                const temp = data.map(t => {
                    return {
                        value: t.id, label: t.name
                    }
                })
                return dispatch({
                    type: ALL_TEMPERAMENTS,
                    payload: temp
                })
            })
            .catch(error => {
                return { error: error }
            })
    }

}

export {
    all_dogs,
    filter_dogs,
    all_temperaments
}