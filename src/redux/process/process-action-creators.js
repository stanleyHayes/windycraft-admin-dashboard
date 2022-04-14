import axios from "axios";
import {CONSTANTS} from "../../utils/constants/constants";
import {PROCESS_ACTION_TYPES} from "./process-action-types";

const createProcessRequest = () => {
    return {
        type: PROCESS_ACTION_TYPES.CREATE_PROCESS_REQUEST
    }
}

const createProcessSuccess = message => {
    return {
        type: PROCESS_ACTION_TYPES.CREATE_PROCESS_SUCCESS,
        payload: message
    }
}

const createProcessFailure = message => {
    return {
        type: PROCESS_ACTION_TYPES.CREATE_PROCESS_FAIL,
        payload: message
    }
}

const createProcess = (process, token) => {
    return async dispatch => {
        try {
            dispatch(createProcessRequest());
            const response = await axios({
                method: 'POST',
                url: `${CONSTANTS.URL_BASE_SERVER}/processes`,
                data: process,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {message} = response.data;
            dispatch(createProcessSuccess(message));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(createProcessFailure(message));
        }
    }
}


const getProcessRequest = () => {
    return {
        type: PROCESS_ACTION_TYPES.GET_PROCESS_REQUEST
    }
}

const getProcessSuccess = (process, message) => {
    return {
        type: PROCESS_ACTION_TYPES.GET_PROCESS_SUCCESS,
        payload: {message, process}
    }
}

const getProcessFailure = message => {
    return {
        type: PROCESS_ACTION_TYPES.GET_PROCESS_FAIL,
        payload: message
    }
}

const getProcess = (ID, token) => {
    return async dispatch => {
        try {
            dispatch(getProcessRequest());
            const response = await axios({
                method: 'GET',
                url: `${CONSTANTS.URL_BASE_SERVER}/processes/${ID}`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {message, data} = response.data;
            dispatch(getProcessSuccess(data, message));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(getProcessFailure(message));
        }
    }
}


const getProcessesRequest = () => {
    return {
        type: PROCESS_ACTION_TYPES.GET_PROCESSES_REQUEST
    }
}

const getProcessesSuccess = (processes, count, message) => {
    return {
        type: PROCESS_ACTION_TYPES.GET_PROCESSES_SUCCESS,
        payload: {message, processes, count}
    }
}

const getProcessesFailure = message => {
    return {
        type: PROCESS_ACTION_TYPES.GET_PROCESSES_FAIL,
        payload: message
    }
}

const getProcesses = token => {
    return async dispatch => {
        try {
            dispatch(getProcessesRequest());
            const response = await axios({
                method: 'GET',
                url: `${CONSTANTS.URL_BASE_SERVER}/processes`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {message, data, count} = response.data;
            dispatch(getProcessesSuccess(data, count, message));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(getProcessesFailure(message));
        }
    }
}


const updateProcessRequest = () => {
    return {
        type: PROCESS_ACTION_TYPES.UPDATE_PROCESS_REQUEST
    }
}

const updateProcessSuccess = (process, message) => {
    return {
        type: PROCESS_ACTION_TYPES.UPDATE_PROCESS_SUCCESS,
        payload: {message, process}
    }
}

const updateProcessFailure = message => {
    return {
        type: PROCESS_ACTION_TYPES.UPDATE_PROCESS_FAIL,
        payload: message
    }
}

const updateProcess = (process, ID, token) => {
    return async dispatch => {
        try {
            dispatch(updateProcessRequest());
            const response = await axios({
                method: 'PUT',
                url: `${CONSTANTS.URL_BASE_SERVER}/processes/${ID}`,
                data: process,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {message, data} = response.data;
            dispatch(updateProcessSuccess(data, message));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(updateProcessFailure(message));
        }
    }
}


const deleteProcessRequest = () => {
    return {
        type: PROCESS_ACTION_TYPES.DELETE_PROCESS_REQUEST
    }
}

const deleteProcessSuccess = (process, message) => {
    return {
        type: PROCESS_ACTION_TYPES.DELETE_PROCESS_SUCCESS,
        payload: {message, process}
    }
}

const deleteProcessFailure = message => {
    return {
        type: PROCESS_ACTION_TYPES.DELETE_PROCESS_FAIL,
        payload: message
    }
}

const deleteProcess = (ID, token) => {
    return async dispatch => {
        try {
            dispatch(deleteProcessRequest());
            const response = await axios({
                method: 'DELETE',
                url: `${CONSTANTS.URL_BASE_SERVER}/processes/${ID}`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {message, data} = response.data;
            dispatch(deleteProcessSuccess(data, message));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(deleteProcessFailure(message));
        }
    }
}


export const PROCESS_ACTION_CREATORS = {
    getProcesses,
    createProcess,
    deleteProcess,
    updateProcess,
    getProcessesRequest,
    getProcess
};
