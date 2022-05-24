import {combineReducers} from 'redux'
import {productsListReducer} from "./productsListReducer";
import {productReducer} from "./productReducer";
import {sizesReducer} from "./sizesReducer";

export const rootReducer = combineReducers({
    productsList: productsListReducer,
    product: productReducer,
    sizes: sizesReducer
})