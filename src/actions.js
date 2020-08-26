import {
    GET_CITIES,
    FETCH_CITY,
    STORE_CITY,
    REMOVE_CITY,
    SET_LOADING_ON,
    SET_LOADING_OFF,
} from './constants'

export const getCities = () => ({
    type: GET_CITIES
});

export const fetchCity = (data) => ({
    type: FETCH_CITY,
    data,
});

export const storeCity = (data, id) => ({
    type: STORE_CITY,
    data,
    id
});

export const removeCity = (id) => ({
    type: REMOVE_CITY,
    id
});

export const setLoadingOn = () => ({
    type: SET_LOADING_ON
});

export const setLoadingOff = () => ({
    type: SET_LOADING_OFF
});