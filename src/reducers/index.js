import { combineReducers } from "redux";

import data from "./dataReducer";
import auth from "./authReducer";
import userDetails from "./userReducer";

export default combineReducers({
    data,
    auth,
    userDetails
});