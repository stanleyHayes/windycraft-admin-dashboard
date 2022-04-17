import axios from "axios";
import {CONSTANTS} from "../../utils/constants/constants";
import {TEAMS_ACTION_TYPES} from "./team-action-types";

const createTeamRequest = () => {
    return {
        type: TEAMS_ACTION_TYPES.CREATE_TEAM_REQUEST
    }
}

const createTeamSuccess = (team) => {
    return {
        type: TEAMS_ACTION_TYPES.CREATE_TEAM_SUCCESS,
        payload: team
    }
}

const createTeamFailure = message => {
    return {
        type: TEAMS_ACTION_TYPES.CREATE_TEAM_FAIL,
        payload: message
    }
}

const createTeam = (team, token, handleClose) => {
    return async dispatch => {
        try {
            dispatch(createTeamRequest());
            const response = await axios({
                method: 'POST',
                url: `${CONSTANTS.URL_BASE_SERVER}/team-members`,
                data: team,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data} = response.data;
            dispatch(createTeamSuccess(data));
            handleClose();
        } catch (e) {
            const {message} = e.response.data;
            dispatch(createTeamFailure(message));
        }
    }
}


const getTeamRequest = () => {
    return {
        type: TEAMS_ACTION_TYPES.GET_TEAM_REQUEST
    }
}

const getTeamSuccess = (team, message) => {
    return {
        type: TEAMS_ACTION_TYPES.GET_TEAM_SUCCESS,
        payload: {message, team}
    }
}

const getTeamFailure = message => {
    return {
        type: TEAMS_ACTION_TYPES.GET_TEAM_FAIL,
        payload: message
    }
}

const getTeam = (ID, token) => {
    return async dispatch => {
        try {
            dispatch(getTeamRequest());
            const response = await axios({
                method: 'GET',
                url: `${CONSTANTS.URL_BASE_SERVER}/team-members/${ID}`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {message, data} = response.data;
            dispatch(getTeamSuccess(data, message));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(getTeamFailure(message));
        }
    }
}


const getTeamsRequest = () => {
    return {
        type: TEAMS_ACTION_TYPES.GET_TEAMS_REQUEST
    }
}

const getTeamsSuccess = (data, count) => {
    return {
        type: TEAMS_ACTION_TYPES.GET_TEAMS_SUCCESS,
        payload: {data, count}
    }
}

const getTeamsFailure = message => {
    return {
        type: TEAMS_ACTION_TYPES.GET_TEAMS_FAIL,
        payload: message
    }
}

const getTeams = token => {
    return async dispatch => {
        try {
            dispatch(getTeamsRequest());
            const response = await axios({
                method: 'GET',
                url: `${CONSTANTS.URL_BASE_SERVER}/team-members`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data, count} = response.data;
            dispatch(getTeamsSuccess(data, count));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(getTeamsFailure(message));
        }
    }
}


const updateTeamRequest = () => {
    return {
        type: TEAMS_ACTION_TYPES.UPDATE_TEAM_REQUEST
    }
}

const updateTeamSuccess = (team, message) => {
    return {
        type: TEAMS_ACTION_TYPES.UPDATE_TEAM_SUCCESS,
        payload: {message, team}
    }
}

const updateTeamFailure = message => {
    return {
        type: TEAMS_ACTION_TYPES.UPDATE_TEAM_FAIL,
        payload: message
    }
}

const updateTeam = (value, ID, token) => {
    return async dispatch => {
        try {
            dispatch(updateTeamRequest());
            const response = await axios({
                method: 'PUT',
                url: `${CONSTANTS.URL_BASE_SERVER}/team-members/${ID}`,
                data: value,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data, message} = response.data;
            dispatch(updateTeamSuccess(data, message));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(updateTeamFailure(message));
        }
    }
}


const deleteTeamRequest = () => {
    return {
        type: TEAMS_ACTION_TYPES.DELETE_TEAM_REQUEST
    }
}

const deleteTeamSuccess = (client, message) => {
    return {
        type: TEAMS_ACTION_TYPES.DELETE_TEAM_SUCCESS,
        payload: {message, client}
    }
}

const deleteTeamFailure = message => {
    return {
        type: TEAMS_ACTION_TYPES.DELETE_TEAM_FAIL,
        payload: message
    }
}

const deleteTeam = (ID, token) => {
    return async dispatch => {
        try {
            dispatch(deleteTeamRequest());
            const response = await axios({
                method: 'DELETE',
                url: `${CONSTANTS.URL_BASE_SERVER}/team-members/${ID}`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {message, data} = response.data;
            dispatch(deleteTeamSuccess(data, message));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(deleteTeamFailure(message));
        }
    }
}


export const TEAMS_ACTION_CREATORS = {deleteTeam, updateTeam, getTeams, getTeam, createTeam};
