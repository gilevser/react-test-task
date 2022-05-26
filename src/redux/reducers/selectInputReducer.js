import {initState} from "../initState";

export const selectInputReducer = (state = initState, action) => {
    const {type, payload} = action;
    switch (type) {
        case 'USER_SELECT':
            return payload;
        case 'CLEAR_SELECT':
            return payload;
        default:
            return state
    }
}