import { ALL_DOGS, FILTER_DOGS } from '../actions/types';

const inicialState = {
    dogs: [],
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

        default: return { ...state }
    }
}

export default rootReducer;