import {values} from "./value-data";

const INITIAL_STATE = {
  values: [...values],
  valuesLoading: false,
  valuesError: null
};

const valueReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export const selectValues = state => state.values;

export default valueReducer;
