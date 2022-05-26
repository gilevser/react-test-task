import React, { useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectInputSize} from "../../redux/actions/selectInputAC";

const ProductContent = ({color}) => {

    const dispatch = useDispatch()
    const sizes = useSelector(store => store.sizes)
    const inputSelect = useSelector(store => store.selectInput)

    const [activeImage, setActiveImage] = useState(0)

    const productImage = (action = 0) => {
        if ( action > color.images.length - 1) {
            setActiveImage(0)
            return (<img src={color?.images[action]} className="productImages"  alt="productImages"/>);
        } if ( action < 0) {
            setActiveImage(color.images.length - 1)
            return (<img src={color?.images[action]} className="productImages"  alt="productImages"/>);
        }
        return (<img src={color?.images[action]} className="productImages"  alt="productImages"/>);
    }

    return (
        <div className='product_content'>
                <div className="row g-0 bg-light position-relative">
                    <div className="col-md-6 mb-md-0 p-md-4 ">
                        <nav aria-label="...">
                            <ul className="pagination pagination-lg paginationImage">
                                <li className="page-item"><div className="page-link" onClick={() => setActiveImage(activeImage - 1)} >Prev</div></li>
                                <li className="page-item"><div className="page-link" onClick={() => setActiveImage(activeImage + 1)} >Next</div></li>
                            </ul>
                        </nav>
                        {productImage(activeImage)}
                    </div>

                    <div className="col-md-6 p-4 ps-md-6">
                        <h1 className="mt-0">{color.price}</h1>
                        <p>{color.description}</p>

                        <label htmlFor="validationDefault04" className="form-label">Размеры</label>
                        <select className="form-select m-2" id="validationDefault04" onChange={(e) => dispatch(selectInputSize(e.target.value))} value={inputSelect} required>
                            <option selected value="Выберите">Выберите...</option>
                            {sizes.map( size => {
                                if (color.sizes.includes(size.id)) {
                                    return (<option value={size.label}
                                                    key={size.id}>{size.label} {size.number}</option>)
                                }
                                return (<option disabled value={size.label}
                                                key={size.id}>{size.label} {size.number}</option>)

                            })}
                        </select>
                    </div>
                </div>
        </div>
    );
};

export default ProductContent;