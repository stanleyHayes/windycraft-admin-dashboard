import {applyMiddleware, createStore} from "redux";
import rootReducer from "./root-reducer";
import thunk from "redux-thunk";
import {CONSTANTS} from "../utils/constants/constants";

const token = localStorage.getItem(CONSTANTS.WINDY_CRAFT_ADMIN_TOKEN_KEY) ?
    CONSTANTS.WINDY_CRAFT_ADMIN_TOKEN_KEY: null;

const authData = localStorage.getItem(CONSTANTS.WINDY_CRAFT_ADMIN_AUTH_KEY) ?
    JSON.parse(CONSTANTS.WINDY_CRAFT_ADMIN_AUTH_KEY): null;

const INITIAL_STATE = {
    auth: {
        token,
        authData
    }
};

const store = createStore(
    rootReducer,
    INITIAL_STATE,
    applyMiddleware(thunk),
);

export default store;
