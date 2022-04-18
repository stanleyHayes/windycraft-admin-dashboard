import {AUTH_ACTION_TYPES} from "./auth-action-types";
import axios from "axios";
import {CONSTANTS} from "../../utils/constants/constants";

const signInRequest = () => {
    return {
        type: AUTH_ACTION_TYPES.SIGN_IN_REQUEST
    }
}

const signInSuccess = (data, token, message) => {
    return {
        type: AUTH_ACTION_TYPES.SIGN_IN_SUCCESS,
        payload: {data, token, message}
    }
}

const signInFail = message => {
    return {
        type: AUTH_ACTION_TYPES.SIGN_IN_FAIL,
        payload: message
    }
}

const signIn = (user, navigate, location) => {
    return async dispatch => {
        try {
            dispatch(signInRequest());
            const response = await axios({
                method: 'POST',
                url: `${CONSTANTS.URL_BASE_SERVER}/auth/login`,
                data: user
            });
            const {data, token, message} = response.data;
            dispatch(signInSuccess(data, token, message));
            localStorage.setItem(CONSTANTS.WINDY_CRAFT_ADMIN_TOKEN_KEY, token);
            localStorage.setItem(CONSTANTS.WINDY_CRAFT_ADMIN_AUTH_KEY, JSON.stringify(data));
            if(location?.state?.path){
                navigate(location.state.path, {replace: true})
            }else {
                navigate('/', {replace: true});
            }
        } catch (e) {
            const {message} = e.response.data;
            dispatch(signInFail(message));
        }
    }
}


const forgotPasswordRequest = () => {
    return {
        type: AUTH_ACTION_TYPES.FORGOT_PASSWORD_REQUEST
    }
}

const forgotPasswordSuccess = (data, token) => {
    return {
        type: AUTH_ACTION_TYPES.FORGOT_PASSWORD_SUCCESS,
        payload: {data, token}
    }
}

const forgotPasswordFail = message => {
    return {
        type: AUTH_ACTION_TYPES.FORGOT_PASSWORD_FAIL,
        payload: message
    }
}

const forgotPassword = user => {
    return async dispatch => {
        try {
            dispatch(forgotPasswordRequest());
            const response = await axios({
                method: 'POST',
                url: `${CONSTANTS.URL_BASE_SERVER}/auth/forgot-password`,
                data: user
            });
            const {data, message} = response.data;
            dispatch(forgotPasswordSuccess(data, message));
        } catch (e) {
            const {message} = e.response.data.error;
            dispatch(forgotPasswordFail(message));
        }
    }
}


const resetPasswordRequest = () => {
    return {
        type: AUTH_ACTION_TYPES.RESET_PASSWORD_REQUEST
    }
}

const resetPasswordSuccess = (data, token) => {
    return {
        type: AUTH_ACTION_TYPES.RESET_PASSWORD_SUCCESS,
        payload: {data, token}
    }
}

const resetPasswordFail = message => {
    return {
        type: AUTH_ACTION_TYPES.RESET_PASSWORD_FAIL,
        payload: message
    }
}

const resetPassword = user => {
    return async dispatch => {
        try {
            dispatch(resetPasswordRequest());
            const response = await axios({
                method: 'POST',
                url: `${CONSTANTS.URL_BASE_SERVER}/auth/reset-password`,
                data: user
            });
            const {data, message} = response.data;
            dispatch(resetPasswordSuccess(data, message));
        } catch (e) {
            const {message} = e.response.data.error;
            dispatch(resetPasswordFail(message));
        }
    }
}


const changePasswordRequest = () => {
    return {
        type: AUTH_ACTION_TYPES.CHANGE_PASSWORD_REQUEST
    }
}

const changePasswordSuccess = (data, token) => {
    return {
        type: AUTH_ACTION_TYPES.CHANGE_PASSWORD_SUCCESS,
        payload: {data, token}
    }
}

const changePasswordFail = message => {
    return {
        type: AUTH_ACTION_TYPES.CHANGE_PASSWORD_FAIL,
        payload: message
    }
}

const changePassword = user => {
    return async dispatch => {
        try {
            dispatch(changePasswordRequest());
            const response = await axios({
                method: 'POST',
                url: `${CONSTANTS.URL_BASE_SERVER}/auth/change-password`,
                data: user
            });
            const {data, message} = response.data;
            dispatch(changePasswordSuccess(data, message));
        } catch (e) {
            const {message} = e.response.data.error;
            dispatch(changePasswordFail(message));
        }
    }
}


const updateProfileRequest = () => {
    return {
        type: AUTH_ACTION_TYPES.UPDATE_PROFILE_REQUEST
    }
}

const updateProfileSuccess = (data) => {
    return {
        type: AUTH_ACTION_TYPES.UPDATE_PROFILE_SUCCESS,
        payload: data
    }
}

const updateProfileFail = message => {
    return {
        type: AUTH_ACTION_TYPES.UPDATE_PROFILE_FAIL,
        payload: message
    }
}

const updateProfile = (user, token) => {
    return async dispatch => {
        try {
            dispatch(updateProfileRequest());
            const response = await axios({
                method: 'PUT',
                url: `${CONSTANTS.URL_BASE_SERVER}/auth/profile`,
                data: user,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data} = response.data;
            dispatch(updateProfileSuccess(data));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(updateProfileFail(message));
        }
    }
}


const logoutRequest = () => {
    return {
        type: AUTH_ACTION_TYPES.LOGOUT_REQUEST
    }
}

const logoutSuccess = () => {
    return {
        type: AUTH_ACTION_TYPES.LOGOUT_SUCCESS
    }
}

const logoutFail = message => {
    return {
        type: AUTH_ACTION_TYPES.LOGOUT_FAIL,
        payload: message
    }
}

const logout = (token, navigate) => {
    return async dispatch => {
        try {
            dispatch(logoutRequest());
            await axios({
                method: 'POST',
                url: `${CONSTANTS.URL_BASE_SERVER}/auth/logout`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            dispatch(logoutSuccess());
            localStorage.clear();
            navigate('/auth/login');
        } catch (e) {
            const {message} = e.response.data;
            dispatch(logoutFail(message));
        }
    }
}


const logoutAllRequest = () => {
    return {
        type: AUTH_ACTION_TYPES.LOGOUT_ALL_REQUEST
    }
}

const logoutAllSuccess = message => {
    return {
        type: AUTH_ACTION_TYPES.LOGOUT_ALL_SUCCESS,
        payload: message
    }
}

const logoutAllFail = message => {
    return {
        type: AUTH_ACTION_TYPES.LOGOUT_ALL_FAIL,
        payload: message
    }
}

const logoutAll = navigate => {
    return async dispatch => {
        try {
            dispatch(logoutAllRequest());
            const response = await axios({
                method: 'POST',
                url: `${CONSTANTS.URL_BASE_SERVER}/auth/logoutAll`
            });
            const {message} = response.data;
            dispatch(logoutAllSuccess(message));
            navigate('/auth/login');
        } catch (e) {
            const {message} = e.response.data;
            dispatch(logoutAllFail(message));
        }
    }
}


const getProfileRequest = () => {
    return {
        type: AUTH_ACTION_TYPES.GET_PROFILE_REQUEST
    }
}

const getProfileSuccess = (data, token) => {
    return {
        type: AUTH_ACTION_TYPES.GET_PROFILE_SUCCESS,
        payload: {data, token}
    }
}

const getProfileFail = message => {
    return {
        type: AUTH_ACTION_TYPES.SIGN_IN_FAIL,
        payload: message
    }
}

const getProfile = (token, navigate) => {
    return async dispatch => {
        try {
            dispatch(getProfileRequest());
            const response = await axios({
                method: 'GET',
                url: `${CONSTANTS.URL_BASE_SERVER}/auth/profile`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data} = response.data;
            dispatch(getProfileSuccess(data, token));
        } catch (e) {
            const {message} = e.response.data;
            localStorage.clear();
            navigate('/auth/login');
            dispatch(getProfileFail(message));
        }
    }
}


const verifyAccountRequest = () => {
    return {
        type: AUTH_ACTION_TYPES.VERIFY_ACCOUNT_REQUEST
    }
}

const verifyAccountSuccess = (data, token) => {
    return {
        type: AUTH_ACTION_TYPES.VERIFY_ACCOUNT_SUCCESS,
        payload: {data, token}
    }
}

const verifyAccountFail = message => {
    return {
        type: AUTH_ACTION_TYPES.VERIFY_ACCOUNT_FAIL,
        payload: message
    }
}

const verifyAccount = user => {
    return async dispatch => {
        try {
            dispatch(verifyAccountRequest());
            const response = await axios({
                method: 'POST',
                url: `${CONSTANTS.URL_BASE_SERVER}/auth/login`,
                data: user
            });
            const {data, message} = response.data;
            dispatch(verifyAccountSuccess(data, message));
        } catch (e) {
            const {message} = e.response.data.error;
            dispatch(verifyAccountFail(message));
        }
    }
}


export const AUTH_ACTION_CREATORS = {
    logout,
    getProfile,
    verifyAccount,
    signIn,
    changePassword,
    updateProfile,
    resetPassword,
    forgotPassword,
    logoutAll
};
