import {faqs} from "./faq-data";

const INITIAL_STATE = {
    faqs: [...faqs],
    faqsLoading: false,
    faqsError: null
};

const faqReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export const selectFAQs = state => state.faqs;

export default faqReducer;
