import {combineReducers} from 'redux'
import {productsListReducer} from "./productsListReducer";
import {productReducer} from "./productReducer";
import {sizesReducer} from "./sizesReducer";
import {selectInputReducer} from "./selectInputReducer";

export const rootReducer = combineReducers({
    productsList: productsListReducer,
    product: productReducer,
    sizes: sizesReducer,
    selectInput: selectInputReducer
})