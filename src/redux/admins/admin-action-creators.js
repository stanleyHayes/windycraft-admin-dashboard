import axios from "axios";
import {CONSTANTS} from "../../utils/constants/constants";
import {ADMIN_ACTION_TYPES} from "./admin-action-types";

const createAdminRequest = () => {
    return {
        type: ADMIN_ACTION_TYPES.CREATE_ADMIN_REQUEST
    }
}

const createAdminSuccess = (data, message) => {
    return {
        type: ADMIN_ACTION_TYPES.CREATE_ADMIN_SUCCESS,
        payload: {message, data}
    }
}

const createAdminFailure = message => {
    return {
        type: ADMIN_ACTION_TYPES.CREATE_ADMIN_FAIL,
        payload: message
    }
}

const createAdmin = (admin, token) => {
    return async dispatch => {
        try {
            dispatch(createAdminRequest());
            const response = await axios({
                method: 'POST',
                url: `${CONSTANTS.URL_BASE_SERVER}/admins`,
                data: admin,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {message, data} = response.data;
            dispatch(createAdminSuccess(data, message));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(createAdminFailure(message));
        }
    }
}


const getAdminRequest = () => {
    return {
        type: ADMIN_ACTION_TYPES.GET_ADMIN_REQUEST
    }
}

const getAdminSuccess = (data) => {
    return {
        type: ADMIN_ACTION_TYPES.GET_ADMIN_SUCCESS,
        payload: data
    }
}

const getAdminFailure = message => {
    return {
        type: ADMIN_ACTION_TYPES.GET_ADMIN_FAIL,
        payload: message
    }
}

const getAdmin = (ID, token) => {
    return async dispatch => {
        try {
            dispatch(getAdminRequest());
            const response = await axios({
                method: 'GET',
                url: `${CONSTANTS.URL_BASE_SERVER}/admins/${ID}`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data} = response.data;
            dispatch(getAdminSuccess(data));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(getAdminFailure(message));
        }
    }
}

const getAdminsRequest = () => {
    return {
        type: ADMIN_ACTION_TYPES.GET_ADMINS_REQUEST
    }
}

const getAdminsSuccess = (data, count) => {
    return {
        type: ADMIN_ACTION_TYPES.GET_ADMINS_SUCCESS,
        payload: {data, count}
    }
}

const getAdminsFailure = message => {
    return {
        type: ADMIN_ACTION_TYPES.GET_ADMINS_FAIL,
        payload: message
    }
}

const getAdmins = token => {
    return async dispatch => {
        try {
            dispatch(getAdminsRequest());
            const response = await axios({
                method: 'GET',
                url: `${CONSTANTS.URL_BASE_SERVER}/admins`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data, count} = response.data;
            dispatch(getAdminsSuccess(data, count));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(getAdminsFailure(message));
        }
    }
}

const updateAdminRequest = () => {
    return {
        type: ADMIN_ACTION_TYPES.UPDATE_ADMIN_REQUEST
    }
}

const updateAdminSuccess = (data, message) => {
    return {
        type: ADMIN_ACTION_TYPES.UPDATE_ADMIN_SUCCESS,
        payload: {message, data}
    }
}

const updateAdminFailure = message => {
    return {
        type: ADMIN_ACTION_TYPES.UPDATE_ADMIN_FAIL,
        payload: message
    }
}

const updateAdmin = (admin, ID, token) => {
    return async dispatch => {
        try {
            dispatch(updateAdminRequest());
            const response = await axios({
                method: 'PUT',
                url: `${CONSTANTS.URL_BASE_SERVER}/admins/${ID}`,
                data: admin,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {message, data} = response.data;
            dispatch(updateAdminSuccess(data, message));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(updateAdminFailure(message));
        }
    }
}


const deleteAdminRequest = () => {
    return {
        type: ADMIN_ACTION_TYPES.DELETE_ADMIN_REQUEST
    }
}

const deleteAdminSuccess = (client, message) => {
    return {
        type: ADMIN_ACTION_TYPES.DELETE_ADMIN_SUCCESS,
        payload: {message, client}
    }
}

const deleteAdminFailure = message => {
    return {
        type: ADMIN_ACTION_TYPES.DELETE_ADMIN_FAIL,
        payload: message
    }
}

const deleteAdmin = (ID, token) => {
    return async dispatch => {
        try {
            dispatch(deleteAdminRequest());
            const response = await axios({
                method: 'DELETE',
                url: `${CONSTANTS.URL_BASE_SERVER}/admins/${ID}`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {message, data} = response.data;
            dispatch(deleteAdminSuccess(data, message));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(deleteAdminFailure(message));
        }
    }
}


export const ADMIN_ACTION_CREATORS = {createAdmin, deleteAdmin, updateAdmin, getAdmins, getAdmin};
