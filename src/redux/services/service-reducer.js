import {SERVICES_ACTION_TYPES} from "./service-action-types";

const INITIAL_STATE = {
    services: [],
    serviceLoading: false,
    serviceError: null,
    totalServices: 0
};

const serviceReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case SERVICES_ACTION_TYPES.GET_SERVICES_REQUEST:
            return {
                ...state,
                serviceError: null,
                serviceLoading: true
            }

        case SERVICES_ACTION_TYPES.GET_SERVICES_SUCCESS:
            return {
                ...state,
                serviceError: null,
                serviceLoading: false,
                services: action.payload.data,
                totalServices: action.payload.count
            }

        case SERVICES_ACTION_TYPES.GET_SERVICES_FAIL:
            return {
                ...state,
                serviceError: action.payload,
                serviceLoading: false
            }

        case SERVICES_ACTION_TYPES.CREATE_SERVICE_REQUEST:
            return {
                ...state,
                serviceError: null,
                serviceLoading: true
            }

        case SERVICES_ACTION_TYPES.CREATE_SERVICE_SUCCESS:
            return {
                ...state,
                serviceError: null,
                serviceLoading: false,
                services: [...state.services, action.payload],
                totalServices: state.services.length + 1
            }

        case SERVICES_ACTION_TYPES.CREATE_SERVICE_FAIL:
            return {
                ...state,
                serviceError: action.payload,
                serviceLoading: false
            }
        default:
            return state;
    }
}

export const selectServices = state => state.services;

export default serviceReducer;
