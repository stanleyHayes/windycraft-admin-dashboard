import {authData} from "./auth-data";

const INITIAL_STATE = {
    authData,
    authLoading: false,
    authError: null
}

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export const selectAuth = state => state.auth

export default authReducer;
