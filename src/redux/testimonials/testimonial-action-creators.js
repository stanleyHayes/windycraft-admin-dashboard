import axios from "axios";
import {CONSTANTS} from "../../utils/constants/constants";
import {TESTIMONIALS_ACTION_TYPES} from "./testimonial-action-types";

const createTestimonialRequest = () => {
    return {
        type: TESTIMONIALS_ACTION_TYPES.CREATE_TESTIMONIAL_REQUEST
    }
}

const createTestimonialSuccess = message => {
    return {
        type: TESTIMONIALS_ACTION_TYPES.CREATE_TESTIMONIAL_SUCCESS,
        payload: message
    }
}

const createTestimonialFailure = message => {
    return {
        type: TESTIMONIALS_ACTION_TYPES.CREATE_TESTIMONIAL_FAIL,
        payload: message
    }
}

const createTestimonial = (quote) => {
    return async dispatch => {
        try {
            dispatch(createTestimonialRequest());
            const response = await axios({
                method: 'POST',
                url: `${CONSTANTS.URL_BASE_SERVER}/testimonials`,
                data: quote
            });
            const {message} = response.data;
            dispatch(createTestimonialSuccess(message));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(createTestimonialFailure(message));
        }
    }
}


const getTestimonialRequest = () => {
    return {
        type: TESTIMONIALS_ACTION_TYPES.GET_TESTIMONIAL_REQUEST
    }
}

const getTestimonialSuccess = (testimonial, message) => {
    return {
        type: TESTIMONIALS_ACTION_TYPES.GET_TESTIMONIAL_SUCCESS,
        payload: {message, testimonial}
    }
}

const getTestimonialFailure = message => {
    return {
        type: TESTIMONIALS_ACTION_TYPES.GET_TESTIMONIAL_FAIL,
        payload: message
    }
}

const getTestimonial = (ID, token) => {
    return async dispatch => {
        try {
            dispatch(getTestimonialRequest());
            const response = await axios({
                method: 'GET',
                url: `${CONSTANTS.URL_BASE_SERVER}/testimonials/${ID}`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {message, data} = response.data;
            dispatch(getTestimonialSuccess(data, message));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(getTestimonialFailure(message));
        }
    }
}


const getTestimonialsRequest = () => {
    return {
        type: TESTIMONIALS_ACTION_TYPES.GET_TESTIMONIALS_REQUEST
    }
}

const getTestimonialsSuccess = (data, count) => {
    return {
        type: TESTIMONIALS_ACTION_TYPES.GET_TESTIMONIALS_SUCCESS,
        payload: {data, count}
    }
}

const getTestimonialsFailure = message => {
    return {
        type: TESTIMONIALS_ACTION_TYPES.GET_TESTIMONIALS_FAIL,
        payload: message
    }
}

const getTestimonials = token => {
    return async dispatch => {
        try {
            dispatch(getTestimonialsRequest());
            const response = await axios({
                method: 'GET',
                url: `${CONSTANTS.URL_BASE_SERVER}/testimonials`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data, count} = response.data;
            dispatch(getTestimonialsSuccess(data, count));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(getTestimonialsFailure(message));
        }
    }
}


const updateTestimonialRequest = () => {
    return {
        type: TESTIMONIALS_ACTION_TYPES.UPDATE_TESTIMONIAL_REQUEST
    }
}

const updateTestimonialSuccess = (testimonial, message) => {
    return {
        type: TESTIMONIALS_ACTION_TYPES.UPDATE_TESTIMONIAL_SUCCESS,
        payload: {message, testimonial}
    }
}

const updateTestimonialFailure = message => {
    return {
        type: TESTIMONIALS_ACTION_TYPES.UPDATE_TESTIMONIAL_FAIL,
        payload: message
    }
}

const updateTestimonial = (value, ID, token) => {
    return async dispatch => {
        try {
            dispatch(updateTestimonialRequest());
            const response = await axios({
                method: 'PUT',
                url: `${CONSTANTS.URL_BASE_SERVER}/testimonials/${ID}`,
                data: value,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {message} = response.data;
            dispatch(updateTestimonialSuccess(message));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(updateTestimonialFailure(message));
        }
    }
}


const deleteTestimonialRequest = () => {
    return {
        type: TESTIMONIALS_ACTION_TYPES.DELETE_TESTIMONIAL_SUCCESS
    }
}

const deleteTestimonialSuccess = (testimonial, message) => {
    return {
        type: TESTIMONIALS_ACTION_TYPES.DELETE_TESTIMONIAL_SUCCESS,
        payload: {message, testimonial}
    }
}

const deleteTestimonialFailure = message => {
    return {
        type: TESTIMONIALS_ACTION_TYPES.DELETE_TESTIMONIAL_FAIL,
        payload: message
    }
}

const deleteTestimonial = (ID, token) => {
    return async dispatch => {
        try {
            dispatch(deleteTestimonialRequest());
            const response = await axios({
                method: 'DELETE',
                url: `${CONSTANTS.URL_BASE_SERVER}/testimonials/${ID}`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {message, data} = response.data;
            dispatch(deleteTestimonialSuccess(data, message));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(deleteTestimonialFailure(message));
        }
    }
}


export const TESTIMONIALS_ACTION_CREATORS = {
    createTestimonial,
    deleteTestimonial,
    updateTestimonial,
    getTestimonials,
    getTestimonial
};
