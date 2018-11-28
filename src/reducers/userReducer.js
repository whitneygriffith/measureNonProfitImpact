import { USER_DETAILS } from "../actions/types";

export default (state = {}, action) => {
    switch (action.type) {
        case USER_DETAILS:
            return action.payload;
        default:
            return state;
    }
};