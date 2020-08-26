import {
    fork,
    call,
    put,
    take,
} from 'redux-saga/effects';

import {
    GET_CITIES,
    FETCH_CITY,
    STORE_CITY,
    REMOVE_CITY,
    SET_LOADING_ON,
    SET_LOADING_OFF,
} from './constants'

import {api} from './api';
import * as endpoint from './endpoints'

function X(msg, obj) {
    const enable = true
    const object = obj ? ": " + JSON.stringify(obj) : ""
    return enable 
    ? console.log('%c%s', 'color: black; background: #e1dff5; font-size: 12px;', " ARTICLE / SAGAS " + msg + object)
    : null
}

function* addCityWorker ({ data }) {
    yield put({type: SET_LOADING_ON})
    try {
        X("addCityWorker try");
        const response = yield call(api.get, endpoint.CITY(data));
        X("addCityWorker try response", response.data);
        yield put({type: STORE_CITY, id: response.data.location.name, data: response.data });
    } catch (error) {
        X("addCityWorker error", error);
    } finally {
        X("addCityWorker finally");
        yield put({type: SET_LOADING_OFF})
    }
}

export default function* addCityWatcher() {
    while (true) {
        const data = yield take(FETCH_CITY);
        X("addCityWatcher payload", data);
        yield fork(addCityWorker, data);
    }
  }