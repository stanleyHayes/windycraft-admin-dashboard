import {VALUES_ACTION_TYPES} from "./value-action-types";

const INITIAL_STATE = {
    values: [],
    valueLoading: false,
    valueError: null,
    totalValues: 0
};

const valueReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case VALUES_ACTION_TYPES.GET_VALUES_REQUEST:
            return {
                ...state,
                valueError: null,
                valueLoading: true
            }

        case VALUES_ACTION_TYPES.GET_VALUES_SUCCESS:
            return {
                ...state,
                valueError: null,
                valueLoading: false,
                values: action.payload.data,
                totalValues: action.payload.count
            }

        case VALUES_ACTION_TYPES.GET_VALUES_FAIL:
            return {
                ...state,
                valueError: action.payload,
                valueLoading: false
            }

        case VALUES_ACTION_TYPES.CREATE_VALUE_REQUEST:
            return {
                ...state,
                valueError: null,
                valueLoading: true
            }

        case VALUES_ACTION_TYPES.CREATE_VALUE_SUCCESS:
            return {
                ...state,
                valueError: null,
                valueLoading: false,
                values: [...state.values, action.payload],
                totalValues: state.values.length + 1
            }

        case VALUES_ACTION_TYPES.CREATE_VALUE_FAIL:
            return {
                ...state,
                valueError: action.payload,
                valueLoading: false
            }
        default:
            return state;
    }
}

export const selectValues = state => state.values;

export default valueReducer;
