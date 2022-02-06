import {team} from "./team-data";

const INITIAL_STATE = {
  teams: [...team],
  teamLoading: false,
  teamError: null
};

const teamReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export const selectTeams = state => state.teams;

export default teamReducer;
