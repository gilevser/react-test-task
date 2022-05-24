import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getProductList} from "../../redux/actions/productsListAC";
import ProductListItem from "../ProductListItem/ProductListItem";

const ProductList = () => {
    const dispatch = useDispatch()
    const products = useSelector(store => store.productsList)

    useEffect(() => {
        dispatch(getProductList())
    }, [dispatch ,products])

    return (
        <div className='productsList'>
            {products.map(product => <ProductListItem product={product} key={product.id}/>)}
        </div>
    );
};

export default ProductList;