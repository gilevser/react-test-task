import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getProductServer} from "../../redux/actions/productAC";
import {getSizesServer} from "../../redux/actions/sizesAC";
import ProductContent from "../ProductContent/ProductContent";
import {selectInputClear} from "../../redux/actions/selectInputAC";

const ProductPage = () => {

    const {id} = useParams()
    const dispatch = useDispatch()
    const product = useSelector(store => store.product)

    const [activeColor, setActiveColor] = useState(1)

    const colorItem = product.colors?.filter(color => color.id === activeColor)

    useEffect(() => {
        dispatch(getProductServer(id))
        dispatch(getSizesServer())
    }, [colorItem])

    const setActive = (id) => {
        setActiveColor(id)
        dispatch(selectInputClear())
    }

    return (
                <div>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <Link to={'/'} type="button" className="btn btn-primary"

                        >Каталог</Link>
                        {product.colors?.map(color =>
                            <button type="button" className="btn btn-primary"
                                    key={color.id}
                                    onClick={() => setActive(color.id)
                                    }
                            >{color.name}</button>
                        )}
                    </div>

                    <div className="product_content">
                        {colorItem?.map(color => <ProductContent
                            key={color}
                            color={color}
                        />)}
                    </div>
                </div>
    );
};

export default ProductPage;