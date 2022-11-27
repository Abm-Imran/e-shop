import React from 'react';
import './ReviewItem.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';

const ReviewItem = ({ product, handleRemoveItem }) => {
    const { img, name, price, shipping, quantity } = product;
    return (
        <div className="review-item-container">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-item">
                <div className="review-item-details" >
                    <p>Name: {name}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Price: ${price}</p>
                    <p>Shipping: ${shipping}</p>
                </div>
                <div className="review-item-btn">
                    <button onClick={() => handleRemoveItem(product)} >
                        <FontAwesomeIcon className='font-awsm' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;