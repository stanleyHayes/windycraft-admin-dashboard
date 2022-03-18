import {quotes} from "./quote-data";

const INITIAL_STATE = {
  quotes: [...quotes],
  quoteLoading: false,
  quoteError: null
};

const quoteReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export const selectQuotes = state => state.quotes;

export default quoteReducer;
