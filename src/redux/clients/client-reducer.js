import {CLIENTS_ACTION_TYPES } from "./client-action-types";

const INITIAL_STATE = {
    clients: [],
    clientsLoading: false,
    clientError: null,
    totalClients: 0
};

const clientReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {


        case CLIENTS_ACTION_TYPES.GET_CLIENTS_REQUEST:
            return {
                ...state,
                clientError: null,
                clientsLoading: true
            }

        case CLIENTS_ACTION_TYPES.GET_CLIENTS_SUCCESS:
            return {
                ...state,
                clientError: null,
                clientLoading: false,
                clients: action.payload.data,
                totalClients: action.payload.count
            }

        case CLIENTS_ACTION_TYPES.GET_CLIENTS_FAIL:
            return {
                ...state,
                clientError: action.payload,
                clientLoading: false
            }

        case CLIENTS_ACTION_TYPES.CREATE_CLIENT_REQUEST:
            return {
                ...state,
                clientError: null,
                clientLoading: true
            }

        case CLIENTS_ACTION_TYPES.CREATE_CLIENT_SUCCESS:
            return {
                ...state,
                clientError: null,
                clientLoading: false,
                clients: [...state.clients, action.payload],
                totalClients: state.clients.length + 1
            }

        case CLIENTS_ACTION_TYPES.CREATE_CLIENT_FAIL:
            return {
                ...state,
                clientError: action.payload,
                clientLoading: false
            }
        default:
            return state;
    }
}

export const selectClients = state => state.clients;

export default clientReducer;
