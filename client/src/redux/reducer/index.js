import {
    ALL_DOGS,
    FILTER_DOGS,
    ALL_TEMPERAMENTS,
    NEW_DOG,
    CHANGE_PAGE,
    FIND_BY_ID,
    UPDATE_DATA_FILTER,
    IS_SHOW_SIDE_BAR
} from '../actions/types';

const inicialState = {
    dogs: [],
    temperaments: [],
    pagination: {
        currentPage: 1,
        itemsPerPage: 8,
        buttonPagination: 5,
    },
    dogDetail: [],
    dataFilter: {
        name: '',
        filter: {
            fromApi: false,
            fromDB: false,
            temperaments: []
        },
        order: {
            by: 'breed',
            ascDesc: 'ascending',
        }
    },
    showSideBar:true,
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

        case UPDATE_DATA_FILTER:
            return {
                ...state,
                dataFilter: payload
            }

        case IS_SHOW_SIDE_BAR:
            return {
                ...state,
                showSideBar: !state.showSideBar
            }

        default: return { ...state }
    }
}

export default rootReducer;