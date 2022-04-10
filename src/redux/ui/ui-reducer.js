import {UI_ACTION_TYPES} from "./ui-action-types";

const INITIAL_STATE ={
    themeVariant: 'dark',
    activePath: '/',
    isToggled: false
};

const uiReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case UI_ACTION_TYPES.CHANGE_ACTIVE_PATH:
            return {
                ...state,
                activePath: action.payload
            }

        case UI_ACTION_TYPES.OPEN_SIDEBAR:
            return {
                ...state,
                isToggled: true
            }

        case UI_ACTION_TYPES.CLOSE_SIDEBAR:
            return {
                ...state,
                isToggled: false
            }
        default:
            return state;
    }
}

export const selectUI = state => state.ui;

export default uiReducer;
