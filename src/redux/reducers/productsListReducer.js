import {initState} from "../initState";

export const productsListReducer = (state = initState, action) => {
    const {type, payload } = action

    switch (type) {
        case "SET_PRODUCTS_LIST":
            return payload;

        default:
            return state
    }
}