import {QUOTE_ACTION_TYPES} from "./quote-action-types";

const INITIAL_STATE = {
    quotes: [],
    quoteLoading: false,
    quoteError: null,
    totalQuotes: 0
};

const quoteReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case QUOTE_ACTION_TYPES.GET_QUOTES_REQUEST:
            return {
                ...state,
                quoteError: null,
                quoteLoading: true
            }

        case QUOTE_ACTION_TYPES.GET_QUOTES_SUCCESS:
            return {
                ...state,
                quoteError: null,
                quoteLoading: false,
                quotes: action.payload.data,
                totalQuotes: action.payload.count
            }

        case QUOTE_ACTION_TYPES.GET_QUOTES_FAIL:
            return {
                ...state,
                quoteError: action.payload,
                quoteLoading: false
            }

        default:
            return state;
    }
}

export const selectQuotes = state => state.quotes;

export default quoteReducer;
