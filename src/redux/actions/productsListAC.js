import {getProducts} from "../../services/api";

export const setProductsList = (data) => {
    return {type: "SET_PRODUCTS_LIST", payload: data}
}

export const getProductList = () => async(dispatch) => {
    const data = await getProducts()
    dispatch(setProductsList(data))
}