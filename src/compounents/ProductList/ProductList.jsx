import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getProductList} from "../../redux/actions/productsListAC";
import ProductListItem from "../ProductListItem/ProductListItem";
import {clearProduct} from "../../redux/actions/productAC";

const ProductList = () => {
    const dispatch = useDispatch()
    const products = useSelector(store => store.productsList)

    useEffect(() => {
        dispatch(getProductList())
        dispatch(clearProduct())
    }, [dispatch ,products])

    return (
        <div className='productsList'>
            {products.map(product => <ProductListItem product={product} key={product.id}/>)}
        </div>
    );
};

export default ProductList;