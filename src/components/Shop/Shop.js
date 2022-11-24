import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProduct] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data => setProduct(data))
    },[])
    return (
        <div className='all-container'>
            <div className="product-container">
                {
                    products.map(product=> <Product
                    key={product.id}
                    product={product}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h1>This is Cart</h1>
            </div>
        </div>
    );
};

export default Shop;