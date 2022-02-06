import {testimonials} from "./testimonial-data";

const INITIAL_STATE = {
    testimonials: [...testimonials],
    testimonialError: null,
    testimonialLoading: false
};

const testimonialReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}


export const selectTestimonials = state => state.testimonials;

export default testimonialReducer;
