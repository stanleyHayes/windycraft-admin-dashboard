import axios from "axios";
import {CONSTANTS} from "../../utils/constants/constants";
import {INVITATIONS_ACTION_TYPES} from "./invitation-action-types";

const createInvitationRequest = () => {
    return {
        type: INVITATIONS_ACTION_TYPES.CREATE_INVITATION_REQUEST
    }
}

const createInvitationSuccess = (invitation, message) => {
    return {
        type: INVITATIONS_ACTION_TYPES.CREATE_INVITATION_SUCCESS,
        payload: {message, invitation}
    }
}

const createInvitationFailure = message => {
    return {
        type: INVITATIONS_ACTION_TYPES.CREATE_INVITATION_FAIL,
        payload: message
    }
}

const createInvitation = (quote) => {
    return async dispatch => {
        try {
            dispatch(createInvitationRequest());
            const response = await axios({
                method: 'POST',
                url: `${CONSTANTS.URL_BASE_SERVER}/invitations`,
                data: quote
            });
            const {message} = response.data;
            dispatch(createInvitationSuccess(message));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(createInvitationFailure(message));
        }
    }
}


const getInvitationRequest = () => {
    return {
        type: INVITATIONS_ACTION_TYPES.GET_INVITATION_REQUEST
    }
}

const getInvitationSuccess = (client, message) => {
    return {
        type: INVITATIONS_ACTION_TYPES.GET_INVITATION_SUCCESS,
        payload: {message, client}
    }
}

const getInvitationFailure = message => {
    return {
        type: INVITATIONS_ACTION_TYPES.GET_INVITATION_FAIL,
        payload: message
    }
}

const getInvitation = (ID, token) => {
    return async dispatch => {
        try {
            dispatch(getInvitationRequest());
            const response = await axios({
                method: 'GET',
                url: `${CONSTANTS.URL_BASE_SERVER}/invitations/${ID}`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {message, data} = response.data;
            dispatch(getInvitationSuccess(data, message));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(getInvitationFailure(message));
        }
    }
}


const getInvitationsRequest = () => {
    return {
        type: INVITATIONS_ACTION_TYPES.GET_INVITATIONS_REQUEST
    }
}

const getInvitationsSuccess = (invitations, count, message) => {
    return {
        type: INVITATIONS_ACTION_TYPES.GET_INVITATIONS_SUCCESS,
        payload: {message, invitations, count}
    }
}

const getInvitationsFailure = message => {
    return {
        type: INVITATIONS_ACTION_TYPES.GET_INVITATIONS_FAIL,
        payload: message
    }
}

const getInvitations = token => {
    return async dispatch => {
        try {
            dispatch(getInvitationsRequest());
            const response = await axios({
                method: 'GET',
                url: `${CONSTANTS.URL_BASE_SERVER}/invitations`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {message, data, count} = response.data;
            dispatch(getInvitationsSuccess(data, count, message));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(getInvitationsFailure(message));
        }
    }
}


const updateInvitationRequest = () => {
    return {
        type: INVITATIONS_ACTION_TYPES.UPDATE_INVITATION_REQUEST
    }
}

const updateInvitationSuccess = (invitation, message) => {
    return {
        type: INVITATIONS_ACTION_TYPES.UPDATE_INVITATION_SUCCESS,
        payload: {message, invitation}
    }
}

const updateInvitationFailure = message => {
    return {
        type: INVITATIONS_ACTION_TYPES.UPDATE_INVITATION_FAIL,
        payload: message
    }
}

const updateInvitation = (invitation, ID, token) => {
    return async dispatch => {
        try {
            dispatch(updateInvitationRequest());
            const response = await axios({
                method: 'PUT',
                url: `${CONSTANTS.URL_BASE_SERVER}/invitations/${ID}`,
                data: invitation,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {message, data} = response.data;
            dispatch(updateInvitationSuccess(data, message));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(updateInvitationFailure(message));
        }
    }
}


const deleteInvitationRequest = () => {
    return {
        type: INVITATIONS_ACTION_TYPES.DELETE_INVITATION_REQUEST
    }
}

const deleteInvitationSuccess = (invitation, message) => {
    return {
        type: INVITATIONS_ACTION_TYPES.DELETE_INVITATION_SUCCESS,
        payload: {message, invitation}
    }
}

const deleteInvitationFailure = message => {
    return {
        type: INVITATIONS_ACTION_TYPES.DELETE_INVITATION_FAIL,
        payload: message
    }
}

const deleteInvitation = (ID, token) => {
    return async dispatch => {
        try {
            dispatch(deleteInvitationRequest());
            const response = await axios({
                method: 'DELETE',
                url: `${CONSTANTS.URL_BASE_SERVER}/invitations/${ID}`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {message, data} = response.data;
            dispatch(deleteInvitationSuccess(data, message));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(deleteInvitationFailure(message));
        }
    }
}

export const INVITATION_ACTION_CREATORS = {
    createInvitation,
    deleteInvitation,
    updateInvitation,
    getInvitations,
    getInvitation
};
