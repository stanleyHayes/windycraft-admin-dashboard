import {processes} from "./process-data";

const INITIAL_STATE = {
    processes: [...processes],
    processesLoading: false,
    processesError: null
};

const processReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export const selectProcesses = state => state.processes;

export default processReducer;
