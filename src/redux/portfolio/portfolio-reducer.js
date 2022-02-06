import {projects} from "./portfolio-data";

const INITIAL_STATE = {
    projects: [...projects],
    projectsLoading: false,
    projectsError: null
};

const portfolioReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export const selectPortfolio = state => state.portfolio;

export default portfolioReducer;
