import {messages} from "./messages-data";

const INITIAL_STATE = {
    messages: [...messages],
    messageLoading: false,
    messageError: null
};

const messagesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export const selectMessages = state => state.messages;

export default messagesReducer;
