import {getProduct} from "../../services/api";

export const setProduct = (data) => {
    return {type: 'SET_PRODUCT', payload: data}
}

export const getProductServer = (id) => async (dispatch) => {
    const data = await getProduct(id)
    dispatch(setProduct(data))
}