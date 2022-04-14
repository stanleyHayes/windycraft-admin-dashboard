import {QUOTE_ACTION_TYPES} from "../quotes/quote-action-types";

const INITIAL_STATE = {
    clients: [],
    clientsLoading: false,
    clientError: null,
    totalClients: 0
};

const clientReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {


        case QUOTE_ACTION_TYPES.GET_QUOTES_REQUEST:
            return {
                ...state,
                clientError: null,
                clientsLoading: true
            }

        case QUOTE_ACTION_TYPES.GET_QUOTES_SUCCESS:
            return {
                ...state,
                clientError: null,
                clientLoading: false,
                clients: action.payload.data,
                totalClients: action.payload.count
            }

        case QUOTE_ACTION_TYPES.GET_QUOTES_FAIL:
            return {
                ...state,
                clientError: action.payload,
                clientLoading: false
            }

        default:
            return state;
    }
}

export const selectClients = state => state.clients;

export default clientReducer;
