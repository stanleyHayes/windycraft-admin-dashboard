import axios from "axios";
import {CONSTANTS} from "../../utils/constants/constants";
import {FAQS_ACTION_TYPES} from "./faq-action-types";

const createFAQRequest = () => {
    return {
        type: FAQS_ACTION_TYPES.CREATE_FAQ_REQUEST
    }
}

const createFAQSuccess = (data) => {
    return {
        type: FAQS_ACTION_TYPES.CREATE_FAQ_SUCCESS,
        payload:  data
    }
}

const createFAQFailure = message => {
    return {
        type: FAQS_ACTION_TYPES.CREATE_FAQ_FAIL,
        payload: message
    }
}

const createFAQ = (faq, token, handleClose) => {
    return async dispatch => {
        try {
            dispatch(createFAQRequest());
            const response = await axios({
                method: 'POST',
                url: `${CONSTANTS.URL_BASE_SERVER}/faqs`,
                data: faq,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {message, data} = response.data;
            dispatch(createFAQSuccess(data, message));
            handleClose();
        } catch (e) {
            const {message} = e.response.data;
            dispatch(createFAQFailure(message));
        }
    }
}


const getFAQRequest = () => {
    return {
        type: FAQS_ACTION_TYPES.GET_FAQ_REQUEST
    }
}

const getFAQSuccess = (faq, message) => {
    return {
        type: FAQS_ACTION_TYPES.GET_FAQ_SUCCESS,
        payload: {message, faq}
    }
}

const getFAQFailure = message => {
    return {
        type: FAQS_ACTION_TYPES.GET_FAQ_FAIL,
        payload: message
    }
}

const getFAQ = (ID, token) => {
    return async dispatch => {
        try {
            dispatch(getFAQRequest());
            const response = await axios({
                method: 'GET',
                url: `${CONSTANTS.URL_BASE_SERVER}/faqs/${ID}`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {message, data} = response.data;
            dispatch(getFAQSuccess(data, message));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(getFAQFailure(message));
        }
    }
}


const getFAQsRequest = () => {
    return {
        type: FAQS_ACTION_TYPES.GET_FAQS_REQUEST
    }
}

const getFAQsSuccess = (data, count) => {
    return {
        type: FAQS_ACTION_TYPES.GET_FAQS_SUCCESS,
        payload: {data, count}
    }
}

const getFAQsFailure = message => {
    return {
        type: FAQS_ACTION_TYPES.GET_FAQS_FAIL,
        payload: message
    }
}

const getFAQs = token => {
    return async dispatch => {
        try {
            dispatch(getFAQsRequest());
            const response = await axios({
                method: 'GET',
                url: `${CONSTANTS.URL_BASE_SERVER}/faqs`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data, count} = response.data;
            dispatch(getFAQsSuccess(data, count));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(getFAQsFailure(message));
        }
    }
}


const updateFAQRequest = (faq, message) => {
    return {
        type: FAQS_ACTION_TYPES.UPDATE_FAQ_REQUEST,
        payload: {faq, message}
    }
}

const updateFAQSuccess = (faq, message) => {
    return {
        type: FAQS_ACTION_TYPES.UPDATE_FAQ_SUCCESS,
        payload: {message, faq}
    }
}

const updateFAQFailure = message => {
    return {
        type: FAQS_ACTION_TYPES.UPDATE_FAQ_FAIL,
        payload: message
    }
}

const updateFAQ = (faq, ID, token, handleClose) => {
    return async dispatch => {
        try {
            dispatch(updateFAQRequest());
            const response = await axios({
                method: 'PUT',
                url: `${CONSTANTS.URL_BASE_SERVER}/faqs/${ID}`,
                data: faq,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {message, data} = response.data;
            dispatch(updateFAQSuccess(data, message));
            handleClose();
        } catch (e) {
            const {message} = e.response.data;
            dispatch(updateFAQFailure(message));
        }
    }
}


const deleteFAQRequest = () => {
    return {
        type: FAQS_ACTION_TYPES.DELETE_FAQ_REQUEST
    }
}

const deleteFAQSuccess = (faq, message) => {
    return {
        type: FAQS_ACTION_TYPES.DELETE_FAQ_SUCCESS,
        payload: {message, faq}
    }
}

const deleteFAQFailure = message => {
    return {
        type: FAQS_ACTION_TYPES.DELETE_FAQ_FAIL,
        payload: message
    }
}

const deleteFAQ = (ID, token) => {
    return async dispatch => {
        try {
            dispatch(deleteFAQRequest());
            const response = await axios({
                method: 'DELETE',
                url: `${CONSTANTS.URL_BASE_SERVER}/faqs/${ID}`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {message, data} = response.data;
            dispatch(deleteFAQSuccess(data, message));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(deleteFAQFailure(message));
        }
    }
}


export const FAQ_ACTION_CREATORS = {createFAQ, deleteFAQ, updateFAQ, getFAQs, getFAQ};
