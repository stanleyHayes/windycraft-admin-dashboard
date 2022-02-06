import {combineReducers} from "redux";
import authReducer from "./authentication/auth-reducer";
import uiReducer from "./ui/ui-reducer";


const rootReducer = combineReducers({
    ui: uiReducer,
    auth: authReducer,
});

export default rootReducer;
