import {TESTIMONIALS_ACTION_TYPES} from "./testimonial-action-types";

const INITIAL_STATE = {
    testimonials: [],
    testimonialError: null,
    testimonialLoading: false,
    totalTestimonials: 0
};

const testimonialReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case TESTIMONIALS_ACTION_TYPES.GET_TESTIMONIALS_REQUEST:
            return {
                ...state,
                testimonialError: null,
                testimonialLoading: true
            }

        case TESTIMONIALS_ACTION_TYPES.GET_TESTIMONIALS_SUCCESS:
            return {
                ...state,
                testimonialError: null,
                testimonialLoading: false,
                testimonials: action.payload.data,
                totalTestimonials: action.payload.count
            }

        case TESTIMONIALS_ACTION_TYPES.GET_TESTIMONIALS_FAIL:
            return {
                ...state,
                testimonialError: action.payload,
                testimonialLoading: false
            }


        default:
            return state;
    }
}


export const selectTestimonials = state => state.testimonials;

export default testimonialReducer;
