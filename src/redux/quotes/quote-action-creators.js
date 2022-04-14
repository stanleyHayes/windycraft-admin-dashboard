import axios from "axios";
import {CONSTANTS} from "../../utils/constants/constants";
import {QUOTE_ACTION_TYPES} from "./quote-action-types";

const createQuoteRequest = () => {
    return {
        type: QUOTE_ACTION_TYPES.CREATE_QUOTE_REQUEST
    }
}

const createQuoteSuccess = (quote,message) => {
    return {
        type: QUOTE_ACTION_TYPES.CREATE_QUOTE_SUCCESS,
        payload: {message, quote}
    }
}

const createQuoteFailure = message => {
    return {
        type: QUOTE_ACTION_TYPES.CREATE_QUOTE_FAIL,
        payload: message
    }
}

const createQuote = (quote, ID) => {
    return async dispatch => {
        try {
            dispatch(createQuoteRequest());
            const response = await axios({
                method: 'POST',
                url: `${CONSTANTS.URL_BASE_SERVER}/quotes/${ID}`,
                data: quote
            });
            const {message, data} = response.data;
            dispatch(createQuoteSuccess(data, message));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(createQuoteFailure(message));
        }
    }
}


const getQuoteRequest = () => {
    return {
        type: QUOTE_ACTION_TYPES.GET_QUOTE_REQUEST
    }
}

const getQuoteSuccess = (quote,message) => {
    return {
        type: QUOTE_ACTION_TYPES.GET_QUOTE_SUCCESS,
        payload: {message, quote}
    }
}

const getQuoteFailure = message => {
    return {
        type: QUOTE_ACTION_TYPES.GET_QUOTE_FAIL,
        payload: message
    }
}

const getQuote = (ID, token) => {
    return async dispatch => {
        try {
            dispatch(getQuoteRequest());
            const response = await axios({
                method: 'GET',
                url: `${CONSTANTS.URL_BASE_SERVER}/quotes/${ID}`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {message,data} = response.data;
            dispatch(getQuoteSuccess(data, message));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(getQuoteFailure(message));
        }
    }
}


const getQuotesRequest = () => {
    return {
        type: QUOTE_ACTION_TYPES.GET_QUOTES_REQUEST
    }
}

const getQuotesSuccess = (quotes, count, message) => {
    return {
        type: QUOTE_ACTION_TYPES.GET_QUOTES_SUCCESS,
        payload: {message, quotes, count}
    }
}

const getQuotesFailure = message => {
    return {
        type: QUOTE_ACTION_TYPES.GET_QUOTES_FAIL,
        payload: message
    }
}

const getQuotes = token => {
    return async dispatch => {
        try {
            dispatch(getQuotesRequest());
            const response = await axios({
                method: 'GET',
                url: `${CONSTANTS.URL_BASE_SERVER}/quotes`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {message, data, count} = response.data;
            dispatch(getQuotesSuccess(data, count, message));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(getQuotesFailure(message));
        }
    }
}


const updateQuoteRequest = () => {
    return {
        type: QUOTE_ACTION_TYPES.UPDATE_QUOTE_REQUEST
    }
}

const updateQuoteSuccess = (quote, message) => {
    return {
        type: QUOTE_ACTION_TYPES.UPDATE_QUOTE_SUCCESS,
        payload: {message, quote}
    }
}

const updateQuoteFailure = message => {
    return {
        type: QUOTE_ACTION_TYPES.UPDATE_QUOTE_FAIL,
        payload: message
    }
}

const updateQuote = (quote, ID, token) => {
    return async dispatch => {
        try {
            dispatch(updateQuoteRequest());
            const response = await axios({
                method: 'PUT',
                url: `${CONSTANTS.URL_BASE_SERVER}/quotes/${ID}`,
                data: quote,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {message, data} = response.data;
            dispatch(updateQuoteSuccess(data,message));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(updateQuoteFailure(message));
        }
    }
}


const deleteQuoteRequest = () => {
    return {
        type: QUOTE_ACTION_TYPES.DELETE_QUOTE_REQUEST
    }
}

const deleteQuoteSuccess = (client, message) => {
    return {
        type: QUOTE_ACTION_TYPES.DELETE_QUOTE_SUCCESS,
        payload: {message, client}
    }
}

const deleteQuoteFailure = message => {
    return {
        type: QUOTE_ACTION_TYPES.DELETE_QUOTE_FAIL,
        payload: message
    }
}

const deleteClient = (ID, token) => {
    return async dispatch => {
        try {
            dispatch(deleteQuoteRequest());
            const response = await axios({
                method: 'DELETE',
                url: `${CONSTANTS.URL_BASE_SERVER}/quotes/${ID}`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {message, data} = response.data;
            dispatch(deleteQuoteSuccess(data, message));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(deleteQuoteFailure(message));
        }
    }
}


export const QUOTE_ACTION_CREATORS = {createQuote, deleteClient, getQuote, updateQuote, getQuotes};
