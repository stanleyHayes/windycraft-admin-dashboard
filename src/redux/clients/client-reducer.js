import {clients} from "./client-data";

const INITIAL_STATE = {
    clients: [...clients],
    clientsLoading: false,
    clientsError: null
};

const clientReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export const selectClients = state => state.clients;

export default clientReducer;
