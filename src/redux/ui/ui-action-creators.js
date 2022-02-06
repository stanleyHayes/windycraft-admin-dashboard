import {UI_ACTION_TYPES} from "./ui-action-types";

const changeActivePath = path => {
    return {
        type: UI_ACTION_TYPES.CHANGE_ACTIVE_PATH,
        payload: path
    }
}

const openSidebar = () => {
    return {
        type: UI_ACTION_TYPES.OPEN_SIDEBAR
    }
}

const closeSidebar = () => {
    return {
        type: UI_ACTION_TYPES.CLOSE_SIDEBAR
    }
}

export const UI_ACTION_CREATORS = {changeActivePath, openSidebar, closeSidebar};
