import {getSizes} from "../../services/api";

export const setSizes = (data) => {
    return {type: 'SET_SIZES', payload: data}
}

export const getSizesServer = () => async (dispatch) => {
    const data = await getSizes()
    dispatch(setSizes(data))
}