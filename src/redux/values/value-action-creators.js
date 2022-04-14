import axios from "axios";
import {CONSTANTS} from "../../utils/constants/constants";
import {VALUES_ACTION_TYPES} from "./value-action-types";

const createValueRequest = () => {
    return {
        type: VALUES_ACTION_TYPES.CREATE_VALUE_REQUEST
    }
}

const createValueSuccess = (value, message) => {
    return {
        type: VALUES_ACTION_TYPES.CREATE_VALUE_SUCCESS,
        payload: {message, value}
    }
}

const createValueFailure = message => {
    return {
        type: VALUES_ACTION_TYPES.CREATE_VALUE_FAIL,
        payload: message
    }
}

const createValue = (value) => {
    return async dispatch => {
        try {
            dispatch(createValueRequest());
            const response = await axios({
                method: 'POST',
                url: `${CONSTANTS.URL_BASE_SERVER}/values`,
                data: value
            });
            const {message, data} = response.data;
            dispatch(createValueSuccess(data, message));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(createValueFailure(message));
        }
    }
}


const getValueRequest = () => {
    return {
        type: VALUES_ACTION_TYPES.GET_VALUE_REQUEST
    }
}

const getValueSuccess = (value,message) => {
    return {
        type: VALUES_ACTION_TYPES.GET_VALUE_SUCCESS,
        payload: {message, value}
    }
}

const getValueFailure = message => {
    return {
        type: VALUES_ACTION_TYPES.GET_VALUE_FAIL,
        payload: message
    }
}

const getValue = (ID, token) => {
    return async dispatch => {
        try {
            dispatch(getValueRequest());
            const response = await axios({
                method: 'GET',
                url: `${CONSTANTS.URL_BASE_SERVER}/values/${ID}`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {message} = response.data;
            dispatch(getValueSuccess(message));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(getValueFailure(message));
        }
    }
}


const getValuesRequest = () => {
    return {
        type: VALUES_ACTION_TYPES.GET_VALUES_REQUEST
    }
}

const getValuesSuccess = (values, count, message) => {
    return {
        type: VALUES_ACTION_TYPES.GET_VALUES_SUCCESS,
        payload: {message, values, count}
    }
}

const getValuesFailure = message => {
    return {
        type: VALUES_ACTION_TYPES.GET_VALUES_FAIL,
        payload: message
    }
}

const getValues = token => {
    return async dispatch => {
        try {
            dispatch(getValuesRequest());
            const response = await axios({
                method: 'GET',
                url: `${CONSTANTS.URL_BASE_SERVER}/values`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {message, data, count} = response.data;
            dispatch(getValuesSuccess(data, count, message));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(getValuesFailure(message));
        }
    }
}


const updateValueRequest = () => {
    return {
        type: VALUES_ACTION_TYPES.UPDATE_VALUE_REQUEST
    }
}

const updateValueSuccess = (value, message) => {
    return {
        type: VALUES_ACTION_TYPES.UPDATE_VALUE_SUCCESS,
        payload: {message, value}
    }
}

const updateValueFailure = message => {
    return {
        type: VALUES_ACTION_TYPES.UPDATE_VALUE_FAIL,
        payload: message
    }
}

const updateValue = (value, ID, token) => {
    return async dispatch => {
        try {
            dispatch(updateValueRequest());
            const response = await axios({
                method: 'PUT',
                url: `${CONSTANTS.URL_BASE_SERVER}/values/${ID}`,
                data: value,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {message} = response.data;
            dispatch(updateValueSuccess(message));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(updateValueFailure(message));
        }
    }
}


const deleteValueRequest = () => {
    return {
        type: VALUES_ACTION_TYPES.DELETE_VALUE_REQUEST
    }
}

const deleteValueSuccess = (value, message) => {
    return {
        type: VALUES_ACTION_TYPES.DELETE_VALUE_SUCCESS,
        payload: {message, value}
    }
}

const deleteValueFailure = message => {
    return {
        type: VALUES_ACTION_TYPES.DELETE_VALUE_FAIL,
        payload: message
    }
}

const deleteValue = (ID, token) => {
    return async dispatch => {
        try {
            dispatch(deleteValueRequest());
            const response = await axios({
                method: 'DELETE',
                url: `${CONSTANTS.URL_BASE_SERVER}/values/${ID}`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {message, data} = response.data;
            dispatch(deleteValueSuccess(data, message));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(deleteValueFailure(message));
        }
    }
}


export const VALUES_ACTION_CREATORS = {createValue, deleteValue, updateValue, getValues, getValue};
