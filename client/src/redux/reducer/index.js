import { ALL_DOGS, FILTER_DOGS, ALL_TEMPERAMENTS } from '../actions/types';

const inicialState = {
    dogs: [],
    temperaments: []
}

const rootReducer = (state = inicialState, { type, payload }) => {
    switch (type) {
        case ALL_DOGS:
            return {
                ...state,
                dogs: payload
            }

        case FILTER_DOGS:
            return {
                ...state,
                dogs: payload
            }

        case ALL_TEMPERAMENTS:
            return {
                ...state,
                temperaments: payload
            }

        default: return { ...state }
    }
}

export default rootReducer;