import React, {useState} from 'react';
import {useSelector} from "react-redux";

const ProductContent = ({color}) => {

    const sizes = useSelector(store => store.sizes)

    const [activeImage, setActiveImage] = useState(0)
    const [myValue, setMyValue] = useState('');

    const productImage = (action) => {
        switch (action) {
            case 0:
                return (<img src={color?.images[0]} className="productImages"  alt="productImages"/>);
            case 1:
                return (<img src={color?.images[1]} className="productImages"  alt="productImages"/>)
        }
    }

    return (
        <div className='product_content'>
                <div className="row g-0 bg-light position-relative">
                    <div className="col-md-6 mb-md-0 p-md-4 ">
                        <nav aria-label="...">
                            <ul className="pagination pagination-lg paginationImage">
                                <li className="page-item"><div className="page-link" onClick={() => setActiveImage(0)} >1</div></li>
                                <li className="page-item"><div className="page-link" onClick={() => setActiveImage(1)} >2</div></li>
                            </ul>
                        </nav>
                        {productImage(activeImage)}
                    </div>

                    <div className="col-md-6 p-4 ps-md-6">
                        <h1 className="mt-0">{color.price}</h1>
                        <p>{color.description}</p>

                        <label htmlFor="validationDefault04" className="form-label">Размеры</label>
                        <select className="form-select m-2" id="validationDefault04" onChange={(e) => setMyValue(e.target.value)} defaultValue={myValue} required>
                            <option selected value="Выберите">Выберите...</option>
                            {sizes.map( size => {
                                if (color.sizes.includes(size.id)) {
                                    return (<option value={size.label}
                                                    key={size.id}>{size.label} {size.number}</option>)
                                }
                                return (<option disabled value={size.label}
                                                key={size.id}>{size.label} {size.number}</option>)

                            }
                            )}
                        </select>
                    </div>
                </div>
        </div>
    );
};

export default ProductContent;