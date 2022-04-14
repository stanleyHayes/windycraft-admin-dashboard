import {MESSAGES_ACTION_TYPES} from "./messages-action-types";

const INITIAL_STATE = {
    messages: [],
    messageLoading: false,
    messageError: null,
    totalMessages: 0
};

const messagesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case MESSAGES_ACTION_TYPES.GET_MESSAGES_REQUEST:
            return {
                ...state,
                messageError: null,
                messageLoading: true
            }

        case MESSAGES_ACTION_TYPES.GET_MESSAGES_SUCCESS:
            return {
                ...state,
                messageError: null,
                messageLoading: false,
                messages: action.payload.data,
                totalMessages: action.payload.count
            }

        case MESSAGES_ACTION_TYPES.GET_MESSAGES_FAIL:
            return {
                ...state,
                messageError: action.payload,
                messageLoading: false
            }


        default:
            return state;
    }
}

export const selectMessages = state => state.messages;

export default messagesReducer;
