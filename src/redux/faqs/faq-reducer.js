import {FAQS_ACTION_TYPES} from "./faq-action-types";

const INITIAL_STATE = {
    faqs: [],
    faqsLoading: false,
    faqsError: null,
    totalFAQs: 0
};

const faqReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case FAQS_ACTION_TYPES.GET_FAQS_REQUEST:
            return {
                ...state,
                faqsError: null,
                faqsLoading: true
            }

        case FAQS_ACTION_TYPES.GET_FAQS_SUCCESS:
            return {
                ...state,
                faqsError: null,
                faqsLoading: false,
                faqs: action.payload.data,
                totalFAQs: action.payload.count
            }

        case FAQS_ACTION_TYPES.GET_FAQS_FAIL:
            return {
                ...state,
                faqsError: action.payload,
                faqsLoading: false
            }

        default:
            return state;
    }
}

export const selectFAQs = state => state.faqs;

export default faqReducer;
