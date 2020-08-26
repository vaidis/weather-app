import {
    GET_CITIES,
    ADD_CITY,
    REMOVE_CITY,
    SET_LOADING_ON,
    SET_LOADING_OFF,
} from './constants'

const initialStore = {
    "loading": false,
    "suggestions": {},
    "cities": {},
}

// filter for REMOVE_CITY action
Object.filter = (obj, predicate) =>
    Object.keys(obj)
        .filter(key => predicate(obj[key]))
        .reduce((res, key) => (res[key] = obj[key], res), {});

const removeKey = (obj, propToDelete) => {
    const { [propToDelete]: deleted, ...objectWithoutDeletedProp } = obj;
    return objectWithoutDeletedProp;
};

// reducers
const reducer = (state = initialStore, action) => {

    switch (action.type) {
        case 'GET_CITIES':
            return { ...state.cities };

        case 'STORE_CITY':
            console.log("reducers.js/STORE_CITY/action", action)
            return {
                ...state,
                cities: {
                    ...state.cities,
                    [action.id]: { data: action.data }
                }
            };

        case 'REMOVE_CITY':
            console.log("reducers.js/REMOVE_CITY/action", action);
            return {
                ...state,
                cities: removeKey(state.cities, action.id)
            };

        // loading component not implemented yet!
        case 'SET_LOADING_ON':
            return { ...state, loading: true };
        case 'SET_LOADING_OFF':
            return { ...state, loading: false };

        default:
            return state;
    }
};

export default reducer;