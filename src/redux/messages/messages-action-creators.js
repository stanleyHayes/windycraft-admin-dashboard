import axios from "axios";
import {CONSTANTS} from "../../utils/constants/constants";
import {MESSAGES_ACTION_TYPES} from "./messages-action-types";

const createMessageRequest = () => {
    return {
        type: MESSAGES_ACTION_TYPES.CREATE_MESSAGE_REQUEST
    }
}

const createMessageSuccess = (data, message) => {
    return {
        type: MESSAGES_ACTION_TYPES.CREATE_MESSAGE_SUCCESS,
        payload: {message, data}
    }
}

const createMessageFailure = message => {
    return {
        type: MESSAGES_ACTION_TYPES.CREATE_MESSAGE_FAIL,
        payload: message
    }
}

const createMessage = (data, token) => {
    return async dispatch => {
        try {
            dispatch(createMessageRequest());
            const response = await axios({
                method: 'POST',
                url: `${CONSTANTS.URL_BASE_SERVER}/messages`,
                data,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {message: m, data: d} = response.data;
            dispatch(createMessageSuccess(d, m));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(createMessageFailure(message));
        }
    }
}


const getMessageRequest = () => {
    return {
        type: MESSAGES_ACTION_TYPES.GET_MESSAGE_REQUEST
    }
}

const getMessageSuccess = (data,message) => {
    return {
        type: MESSAGES_ACTION_TYPES.GET_MESSAGE_SUCCESS,
        payload: {message, data}
    }
}

const getMessageFailure = message => {
    return {
        type: MESSAGES_ACTION_TYPES.GET_MESSAGE_FAIL,
        payload: message
    }
}

const getClient = (ID, token) => {
    return async dispatch => {
        try {
            dispatch(getMessageRequest());
            const response = await axios({
                method: 'GET',
                url: `${CONSTANTS.URL_BASE_SERVER}/messages/${ID}`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {message,data} = response.data;
            dispatch(getMessageSuccess(data, message));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(getMessageFailure(message));
        }
    }
}


const getMessagesRequest = () => {
    return {
        type: MESSAGES_ACTION_TYPES.GET_MESSAGES_REQUEST
    }
}

const getMessagesSuccess = (messages, count, message) => {
    return {
        type: MESSAGES_ACTION_TYPES.GET_MESSAGES_SUCCESS,
        payload: {message, messages, count}
    }
}

const getMessagesFailure = message => {
    return {
        type: MESSAGES_ACTION_TYPES.GET_MESSAGES_FAIL,
        payload: message
    }
}

const getMessages = token => {
    return async dispatch => {
        try {
            dispatch(getMessagesRequest());
            const response = await axios({
                method: 'GET',
                url: `${CONSTANTS.URL_BASE_SERVER}/clients`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {message, data, count} = response.data;
            dispatch(getMessagesSuccess(data, count, message));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(getMessagesFailure(message));
        }
    }
}


const updateMessageRequest = () => {
    return {
        type: MESSAGES_ACTION_TYPES.UPDATE_MESSAGE_REQUEST
    }
}

const updateMessageSuccess = (value, message) => {
    return {
        type: MESSAGES_ACTION_TYPES.UPDATE_MESSAGE_SUCCESS,
        payload: {message, value}
    }
}

const updateMessageFailure = message => {
    return {
        type: MESSAGES_ACTION_TYPES.UPDATE_MESSAGE_FAIL,
        payload: message
    }
}

const updateMessage = (message, ID, token) => {
    return async dispatch => {
        try {
            dispatch(updateMessageRequest());
            const response = await axios({
                method: 'PUT',
                url: `${CONSTANTS.URL_BASE_SERVER}/messages/${ID}`,
                data: message,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {message: m, data} = response.data;
            dispatch(updateMessageSuccess(data, m));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(updateMessageFailure(message));
        }
    }
}


const deleteMessageRequest = () => {
    return {
        type: MESSAGES_ACTION_TYPES.DELETE_MESSAGE_REQUEST
    }
}

const deleteMessageSuccess = (data, message) => {
    return {
        type: MESSAGES_ACTION_TYPES.DELETE_MESSAGE_SUCCESS,
        payload: {message, data}
    }
}

const deleteMessageFailure = message => {
    return {
        type: MESSAGES_ACTION_TYPES.DELETE_MESSAGE_FAIL,
        payload: message
    }
}

const deleteMessage = (ID, token) => {
    return async dispatch => {
        try {
            dispatch(deleteMessageRequest());
            const response = await axios({
                method: 'DELETE',
                url: `${CONSTANTS.URL_BASE_SERVER}/messages/${ID}`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {message, data} = response.data;
            dispatch(deleteMessageSuccess(data, message));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(deleteMessageFailure(message));
        }
    }
}


export const MESSAGE_ACTION_CREATORS = {createMessage, deleteMessage, updateMessage, getMessages, getClient};
