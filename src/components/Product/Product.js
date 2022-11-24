import React from 'react';
import './Product.css'

const Product = ({ product }) => {
    const { name, seller, price, ratings, img } = product;
    return (
        <div className='product-info'>
            <img src={img} alt="" />
            <div className="product-details">
                <h3>{name}</h3>
                <h3>Price: {price}</h3>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings}</p>
            </div>
            <button className='btn-add'>Add to Cart</button>

        </div>
    );
};

export default Product;