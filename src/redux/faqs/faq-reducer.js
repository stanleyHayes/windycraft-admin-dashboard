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

        case FAQS_ACTION_TYPES.CREATE_FAQ_REQUEST:
            return {
                ...state,
                faqError: null,
                faqLoading: true
            }

        case FAQS_ACTION_TYPES.CREATE_FAQ_SUCCESS:
            return {
                ...state,
                faqError: null,
                faqLoading: false,
                faqs: [...state.faqs, action.payload],
                totalServices: state.faqs.length + 1
            }

        case FAQS_ACTION_TYPES.CREATE_FAQ_FAIL:
            return {
                ...state,
                faqError: action.payload,
                faqLoading: false
            }
        default:
            return state;
    }
}

export const selectFAQs = state => state.faqs;

export default faqReducer;
