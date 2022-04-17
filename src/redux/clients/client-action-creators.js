import axios from "axios";
import {CONSTANTS} from "../../utils/constants/constants";
import {CLIENTS_ACTION_TYPES} from "./client-action-types";

const createClientRequest = () => {
    return {
        type: CLIENTS_ACTION_TYPES.CREATE_CLIENT_REQUEST
    }
}

const createClientSuccess = (client) => {
    return {
        type: CLIENTS_ACTION_TYPES.CREATE_CLIENT_SUCCESS,
        payload: client
    }
}

const createClientFailure = message => {
    return {
        type: CLIENTS_ACTION_TYPES.CREATE_CLIENT_FAIL,
        payload: message
    }
}

const createClient = (client, token, handleClose) => {
    return async dispatch => {
        try {
            dispatch(createClientRequest());
            const response = await axios({
                method: 'POST',
                url: `${CONSTANTS.URL_BASE_SERVER}/clients`,
                data: client,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data} = response.data;
            dispatch(createClientSuccess(data));
            handleClose();
        } catch (e) {
            const {message} = e.response.data;
            dispatch(createClientFailure(message));
        }
    }
}


const getClientRequest = () => {
    return {
        type: CLIENTS_ACTION_TYPES.GET_CLIENT_REQUEST
    }
}

const getClientSuccess = (client, message) => {
    return {
        type: CLIENTS_ACTION_TYPES.GET_CLIENT_SUCCESS,
        payload: {message, client}
    }
}

const getClientFailure = message => {
    return {
        type: CLIENTS_ACTION_TYPES.GET_CLIENT_FAIL,
        payload: message
    }
}

const getClient = (ID, token) => {
    return async dispatch => {
        try {
            dispatch(getClientRequest());
            const response = await axios({
                method: 'GET',
                url: `${CONSTANTS.URL_BASE_SERVER}/values/${ID}`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {message, data} = response.data;
            dispatch(getClientSuccess(data, message));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(getClientFailure(message));
        }
    }
}


const getClientsRequest = () => {
    return {
        type: CLIENTS_ACTION_TYPES.GET_CLIENTS_REQUEST
    }
}

const getClientsSuccess = (data, count) => {
    return {
        type: CLIENTS_ACTION_TYPES.GET_CLIENTS_SUCCESS,
        payload: {data, count}
    }
}

const getClientsFailure = message => {
    return {
        type: CLIENTS_ACTION_TYPES.GET_CLIENTS_FAIL,
        payload: message
    }
}

const getClients = token => {
    return async dispatch => {
        try {
            dispatch(getClientsRequest());
            const response = await axios({
                method: 'GET',
                url: `${CONSTANTS.URL_BASE_SERVER}/clients`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data, count} = response.data;
            dispatch(getClientsSuccess(data, count));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(getClientsFailure(message));
        }
    }
}


const updateClientRequest = () => {
    return {
        type: CLIENTS_ACTION_TYPES.UPDATE_CLIENT_REQUEST
    }
}

const updateClientSuccess = (client, message) => {
    return {
        type: CLIENTS_ACTION_TYPES.UPDATE_CLIENT_SUCCESS,
        payload: {message, client}
    }
}

const updateClientFailure = message => {
    return {
        type: CLIENTS_ACTION_TYPES.UPDATE_CLIENT_FAIL,
        payload: message
    }
}

const updateClient = (client, ID, token) => {
    return async dispatch => {
        try {
            dispatch(updateClientRequest());
            const response = await axios({
                method: 'PUT',
                url: `${CONSTANTS.URL_BASE_SERVER}/values/${ID}`,
                data: client,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {message, data} = response.data;
            dispatch(updateClientSuccess(data, message));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(updateClientFailure(message));
        }
    }
}


const deleteClientRequest = () => {
    return {
        type: CLIENTS_ACTION_TYPES.DELETE_CLIENT_REQUEST
    }
}

const deleteClientSuccess = (client, message) => {
    return {
        type: CLIENTS_ACTION_TYPES.DELETE_CLIENT_SUCCESS,
        payload: {message, client}
    }
}

const deleteClientFailure = message => {
    return {
        type: CLIENTS_ACTION_TYPES.DELETE_CLIENT_FAIL,
        payload: message
    }
}

const deleteClient = (ID, token) => {
    return async dispatch => {
        try {
            dispatch(deleteClientRequest());
            const response = await axios({
                method: 'DELETE',
                url: `${CONSTANTS.URL_BASE_SERVER}/clients/${ID}`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {message, data} = response.data;
            dispatch(deleteClientSuccess(data, message));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(deleteClientFailure(message));
        }
    }
}


export const CLIENTS_ACTION_CREATORS = {createClient, deleteClient, updateClient, getClients, getClient};
