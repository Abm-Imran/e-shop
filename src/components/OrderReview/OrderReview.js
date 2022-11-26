import React from 'react';
import useProduct from '../../hooks/useProduct';

const OrderReview = () => {
    const [products, setProducts] = useProduct();
    // console.log(products.length);
    return (
        <div>
            <h2>{products.length}</h2>
        </div>
    );
}

export default OrderReview;