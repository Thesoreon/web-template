import { combineReducers } from "redux";
import authenticationReducer from "./authentication";

export interface IState {
    authenticated: boolean;
}

const rootReducer = combineReducers({
	authenticated: authenticationReducer 
}); 

export default rootReducer;