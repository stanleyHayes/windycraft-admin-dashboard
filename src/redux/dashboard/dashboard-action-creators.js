import axios from "axios";
import {CONSTANTS} from "../../constants/constants";
import {QUOTES_ACTION_TYPES} from "./quote-action-types";

const createQuoteRequest = () => {
    return {
        type: QUOTES_ACTION_TYPES.CREATE_QUOTE_REQUEST
    }
}

const createQuoteSuccess = message => {
    return {
        type: QUOTES_ACTION_TYPES.CREATE_QUOTE_SUCCESS,
        payload: message
    }
}

const createQuoteFailure = message => {
    return {
        type: QUOTES_ACTION_TYPES.CREATE_QUOTE_FAIL,
        payload: message
    }
}

const createQuote = (quote) => {
    return async dispatch => {
        try {
            dispatch(createQuoteRequest());
            const response = await axios({
                method: 'POST',
                url: `${CONSTANTS.SERVER_BASE_URL}/messages`,
                data: quote
            });
            const {message} = response.data;
            dispatch(createQuoteSuccess(message));
            console.log(message);
        } catch (e) {
            const {message} = e.response.data;
            console.log(message);
            dispatch(createQuoteFailure(message));
        }
    }
}


export const QUOTES_ACTION_CREATORS = {createQuote};
