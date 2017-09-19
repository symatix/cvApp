import axios from 'axios'
import { FETCH_CLIENT, FETCH_DOCS, FETCH_CONTACT, FETCH_SERVICES, CLEAR_STATE } from './types'

// change ip when going to production

export const fetchClient = () => async dispatch => {
    const res = await axios.get("/api/client")
    dispatch({ type: FETCH_CLIENT, payload: res.data });
};

export const fetchApi = (callback) => async dispatch => {
    const res = await axios.get("/api/documentation")

    dispatch({ type: FETCH_DOCS, payload: res.data });
    callback();
};

export const fetchContact = (command, callback) => async dispatch => {
    const res = await axios.get("/api/"+command)

    dispatch({ type: FETCH_CONTACT, payload: res.data });
    callback();
};

export const clearState = (callback) => {
    callback();
    return { type: CLEAR_STATE, payload: null }
}

export const fetchServices = (callback) => async dispatch => {
    const res = await axios.get("/api/services");

    dispatch({ type: FETCH_SERVICES, payload: res.data});
    callback();
}
