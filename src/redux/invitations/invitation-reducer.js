import {invitations} from "./invitations-data";

const INITIAL_STATE = {
    invitations: [...invitations],
    invitationLoading: false,
    invitationError: null
};

const invitationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export const selectInvitations = state => state.invitations;

export default invitationReducer;
