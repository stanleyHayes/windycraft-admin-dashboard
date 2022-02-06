import {services} from "./service-data";

const INITIAL_STATE = {
  services: [...services],
  serviceLoading: false,
  serviceError: null
};

const serviceReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export const selectServices = state => state.services;

export default serviceReducer;
