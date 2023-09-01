import axios from 'axios';
import { ALL_DOGS, FILTER_DOGS } from './types';
import { TheDogAPI } from '../../config/endpoints';


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
    return (dispatch) => {
        axios(TheDogAPI)
            .then(({ data }) => {
                console.log(data);
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

export {
    all_dogs,
    filter_dogs
}