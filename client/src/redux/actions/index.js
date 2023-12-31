import axios from 'axios';
import {
    ALL_DOGS,
    ALL_TEMPERAMENTS,
    FILTER_DOGS,
    NEW_DOG,
    CHANGE_PAGE,
    FIND_BY_ID,
    UPDATE_DATA_FILTER,
    IS_SHOW_SIDE_BAR
} from './types';
import { TheDogAPI, TemperamentsAPI } from '../../config/endpoints';
import { filterByTemperaments, orderBy, filterByName } from './middleware';


const changePage = (pageNumber) => {
    return {
        type: CHANGE_PAGE,
        payload: pageNumber,
    };
};

const filter_dogs = (datos) => {

    return (dispatch) => {
        axios(TheDogAPI)
            .then(({ data }) => {

                //filtering By Name
                const filterDogs = data.filter((dog) => filterByName(dog, datos))

                    //filtering By Temperaments And By Api Data or By Data DB
                    .filter((dog) => filterByTemperaments(dog, datos))

                    //Ordering By Ascending or Descending Temperament Or By Weight
                    .sort((a, b) => orderBy(a, b, datos));

                return dispatch({
                    type: FILTER_DOGS,
                    payload: filterDogs,
                });
            })
            .catch(error => {
                return { error: error }
            })
    }
};

const all_dogs = () => {
    return (dispatch) => {
        axios.get(TheDogAPI)
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
};

const all_temperaments = () => {
    return (dispatch) => {
        axios(TemperamentsAPI)
            .then(({ data }) => {
                const temp = data.map(t => {
                    return {
                        id: t.id, name: t.name
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
};

const newDog = (data) => {
  
    return (dispatch) => {

        axios.post(TheDogAPI, {
            ...data
        })
            .then((response) => {

                return dispatch({
                    type: NEW_DOG,
                    payload: response.data.dogReg
                });
            })
            .catch(error => {
                return { error: error }
            })
    }
};

const findById = (id) => {
    if (id === false) return {
        type: FIND_BY_ID,
        payload: [],
    }
    return (dispatch) => {
        axios(`${TheDogAPI}/${id}`)
            .then(({ data }) => {
                return dispatch({
                    type: FIND_BY_ID,
                    payload: data,
                });
            })
            .catch(error => {
                return { error: error }
            })
    }
}

const updateDataFilter = (data) => {
    return {
        type: UPDATE_DATA_FILTER,
        payload: data
    }
}

const isShowSideBar = () => {
    return {
        type: IS_SHOW_SIDE_BAR,
    }
}




export {
    all_dogs,
    filter_dogs,
    all_temperaments,
    newDog,
    changePage,
    findById,
    updateDataFilter,
    isShowSideBar
}