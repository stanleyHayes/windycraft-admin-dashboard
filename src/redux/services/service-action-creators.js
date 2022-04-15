import axios from "axios";
import {CONSTANTS} from "../../utils/constants/constants";
import {SERVICES_ACTION_TYPES} from "./service-action-types";

const createServiceRequest = () => {
    return {
        type: SERVICES_ACTION_TYPES.CREATE_SERVICE_REQUEST
    }
}

const createServiceSuccess = (service) => {
    return {
        type: SERVICES_ACTION_TYPES.CREATE_SERVICE_SUCCESS,
        payload:  service
    }
}

const createServiceFailure = message => {
    return {
        type: SERVICES_ACTION_TYPES.CREATE_SERVICE_FAIL,
        payload: message
    }
}

const createService = (service, token, handleClose) => {
    return async dispatch => {
        try {
            dispatch(createServiceRequest());
            const response = await axios({
                method: 'POST',
                url: `${CONSTANTS.URL_BASE_SERVER}/services`,
                data: service,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {message, data} = response.data;
            dispatch(createServiceSuccess(data, message));
            handleClose();
        } catch (e) {
            const {message} = e.response.data;
            dispatch(createServiceFailure(message));
        }
    }
}


const getServiceRequest = () => {
    return {
        type: SERVICES_ACTION_TYPES.GET_SERVICE_REQUEST
    }
}

const getServiceSuccess = (service, message) => {
    return {
        type: SERVICES_ACTION_TYPES.GET_SERVICE_SUCCESS,
        payload: {message, service}
    }
}

const getServiceFailure = message => {
    return {
        type: SERVICES_ACTION_TYPES.GET_SERVICE_FAIL,
        payload: message
    }
}

const getService = (ID, token) => {
    return async dispatch => {
        try {
            dispatch(getServiceRequest());
            const response = await axios({
                method: 'GET',
                url: `${CONSTANTS.URL_BASE_SERVER}/services/${ID}`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {message, data} = response.data;
            dispatch(getServiceSuccess(data, message));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(getServiceFailure(message));
        }
    }
}


const getServicesRequest = () => {
    return {
        type: SERVICES_ACTION_TYPES.GET_SERVICES_REQUEST
    }
}

const getServicesSuccess = (data, count) => {
    return {
        type: SERVICES_ACTION_TYPES.GET_SERVICES_SUCCESS,
        payload: {data, count}
    }
}

const getServicesFailure = message => {
    return {
        type: SERVICES_ACTION_TYPES.GET_SERVICES_FAIL,
        payload: message
    }
}

const getServices = token => {
    return async dispatch => {
        try {
            dispatch(getServicesRequest());
            const response = await axios({
                method: 'GET',
                url: `${CONSTANTS.URL_BASE_SERVER}/services`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data, count} = response.data;
            dispatch(getServicesSuccess(data, count));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(getServicesFailure(message));
        }
    }
}


const updateServiceRequest = () => {
    return {
        type: SERVICES_ACTION_TYPES.UPDATE_SERVICE_REQUEST
    }
}

const updateServiceSuccess = (service) => {
    return {
        type: SERVICES_ACTION_TYPES.UPDATE_SERVICE_SUCCESS,
        payload: service
    }
}

const updateServiceFailure = message => {
    return {
        type: SERVICES_ACTION_TYPES.UPDATE_SERVICE_FAIL,
        payload: message
    }
}

const updateService = (service, ID, token, handleClose) => {
    return async dispatch => {
        try {
            dispatch(updateServiceRequest());
            const response = await axios({
                method: 'PUT',
                url: `${CONSTANTS.URL_BASE_SERVER}/services/${ID}`,
                data: service,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {message, data} = response.data;
            dispatch(updateServiceSuccess(data, message));
            handleClose();
        } catch (e) {
            const {message} = e.response.data;
            dispatch(updateServiceFailure(message));
        }
    }
}


const deleteServiceRequest = () => {
    return {
        type: SERVICES_ACTION_TYPES.DELETE_SERVICE_REQUEST
    }
}

const deleteServiceSuccess = (service, message) => {
    return {
        type: SERVICES_ACTION_TYPES.DELETE_SERVICE_SUCCESS,
        payload: {message, service}
    }
}

const deleteServiceFailure = message => {
    return {
        type: SERVICES_ACTION_TYPES.DELETE_SERVICE_FAIL,
        payload: message
    }
}

const deleteService = (ID, token) => {
    return async dispatch => {
        try {
            dispatch(deleteServiceRequest());
            const response = await axios({
                method: 'DELETE',
                url: `${CONSTANTS.URL_BASE_SERVER}/services/${ID}`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {message, data} = response.data;
            dispatch(deleteServiceSuccess(data, message));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(deleteServiceFailure(message));
        }
    }
}


export const SERVICE_ACTION_CREATORS = {getService, deleteService, updateService, getServices, createService};
