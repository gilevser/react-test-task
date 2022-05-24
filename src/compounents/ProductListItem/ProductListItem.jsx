import React from 'react';
import {Link} from "react-router-dom";

const ProductListItem = ({product}) => {

    return (
        <>
            <div className="card" style={{width: 18 + 'rem'}}>
                <img src={product?.colors?.[0].images?.[0]} className="card-img-top" alt="productPicture" />
                    <div className="card-body">
                            <Link to={`/product/${product.id}`} className="btn btn-primary stretched-link">{product.name}</Link>
                    </div>
            </div>
        </>
    );
};

export default ProductListItem;