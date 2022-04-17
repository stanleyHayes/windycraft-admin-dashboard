import {TEAMS_ACTION_TYPES} from "./team-action-types";

const INITIAL_STATE = {
    teams: [],
    teamLoading: false,
    teamError: null,
    totalTeams: 0
};

const teamReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case TEAMS_ACTION_TYPES.GET_TEAMS_REQUEST:
            return {
                ...state,
                teamError: null,
                teamLoading: true
            }

        case TEAMS_ACTION_TYPES.GET_TEAMS_SUCCESS:
            return {
                ...state,
                teamError: null,
                teamLoading: false,
                teams: action.payload.data,
                totalTeams: action.payload.count
            }

        case TEAMS_ACTION_TYPES.GET_TEAMS_FAIL:
            return {
                ...state,
                teamError: action.payload,
                teamLoading: false
            }

        case TEAMS_ACTION_TYPES.CREATE_TEAM_REQUEST:
            return {
                ...state,
                teamError: null,
                teamLoading: true
            }

        case TEAMS_ACTION_TYPES.CREATE_TEAM_SUCCESS:
            return {
                ...state,
                teamError: null,
                teamLoading: false,
                teams: [...state.teams, action.payload],
                totalTeams: state.totalTeams + 1
            }

        case TEAMS_ACTION_TYPES.CREATE_TEAM_FAIL:
            return {
                ...state,
                teamError: action.payload,
                teamLoading: false
            }


        default:
            return state;
    }
}

export const selectTeams = state => state.teams;

export default teamReducer;
