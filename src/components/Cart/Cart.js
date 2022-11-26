import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // const {} = cart;
    let totalPrice= 0;
    let shipping = 0;
    let quantity = 0;
    for(const item of cart){
        totalPrice = totalPrice + item.price* item.quantity;
        shipping = shipping + item.shipping;
        quantity = quantity + item.quantity;
    }
    const tax = parseFloat((totalPrice*.01).toFixed(2));
    return (
        <div className='cart-item'>
            <h1>Order Summary</h1>
            <h2>Selected Items: {quantity}</h2>
            <p>Total Price: {totalPrice}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax:${tax}</p>
        </div>
    );
};

export default Cart;