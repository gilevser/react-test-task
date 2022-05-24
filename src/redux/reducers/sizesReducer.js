import {initState} from "../initState";

export const sizesReducer = (state = initState, action) => {
    const { type, payload } = action

    switch (type) {
        case "SET_SIZES":
            return payload;

        default:
            return state
    }
}