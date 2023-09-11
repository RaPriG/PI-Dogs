import {
    ALL_DOGS,
    FILTER_DOGS,
    ALL_TEMPERAMENTS,
    NEW_DOG,
    CHANGE_PAGE,
    FIND_BY_ID
} from '../actions/types';

const inicialState = {
    dogs: [],
    temperaments: [],
    pagination: {
        currentPage: 1,
        itemsPerPage: 8,
        buttonPagination: 5,
    },
    dogDetail: []
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

        case NEW_DOG:
            return {
                ...state,
                dogs: [...state.dogs, payload]
            }

        case CHANGE_PAGE:
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    currentPage: payload
                }
            }

            case FIND_BY_ID:
                return {
                    ...state,
                    dogDetail: payload
                }

        default: return { ...state }
    }
}

export default rootReducer;