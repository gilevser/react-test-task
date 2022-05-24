import {initState} from "../initState";

export const productReducer = (state = initState, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'SET_PRODUCT':
            return payload;

        default:
            return state
    }
}