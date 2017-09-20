import axios from 'axios'
import * as TYPE from './types'

// change ip when going to production

export const inputToState = (input) => {
    return { type:TYPE.RESULT, payload: input}
}


export const fetchClient = () => async dispatch => {
    const res = await axios.get("/api/client")
    dispatch({ type: TYPE.FETCH_CLIENT, payload: res.data });
};

export const fetchApi = (callback) => async dispatch => {
    const res = await axios.get("/api/documentation")

    dispatch({ type: TYPE.FETCH_DOCS, payload: res.data });
    callback();
};

export const fetchContact = (callback) => async dispatch => {
    const res = await axios.get("/api/contact")

    dispatch({ type: TYPE.FETCH_CONTACT, payload: res.data });
    callback();
};

export const fetchServices = (callback) => async dispatch => {
    const res = await axios.get("/api/services");

    dispatch({ type: TYPE.FETCH_SERVICES, payload: res.data});
    callback();
}

export const sendMail = (mailOptions, succ, err) => async dispatch => {
    const res = await axios.post("/api/request", mailOptions);
    if (res){
        succ();
    } else {
        err();
    }
    dispatch({type: "SEND_MAIL", payload: res.data})
}


export const clearState = (callback) => {
    callback();
    return { type: TYPE.CLEAR_STATE, payload: null }
}
