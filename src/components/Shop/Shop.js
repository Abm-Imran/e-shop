import React, { useEffect, useState } from 'react';
import { getStoredCart, localStorageDb } from '../../utilities/locatstoragedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([]);
    // console.log(cart);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    useEffect(() => {
        const storedCart = getStoredCart();

        const savedCart = [];

        for (const id in storedCart) {
            const clickedProduct = products.find(product => product.id === id)
            console.log(clickedProduct);
            if (clickedProduct) {
                const quantity = storedCart[id];
                clickedProduct.quantity = quantity;
                savedCart.push(clickedProduct);
            }
        }
        setCart(savedCart);

    }, [products])

    const handleAddToCartItem = (selectedItem) => {
        // console.log('clicked');
        let newCart = [];
        const cartItem = cart.find(cartItem => cartItem.id === selectedItem.id);
        if (!cartItem) {
            selectedItem.quantity = 1;
            newCart = [...cart, selectedItem];
            
        }
        else {
            const rest = cart.filter(cartItem => cartItem.id !== selectedItem.id);
            selectedItem.quantity = selectedItem.quantity + 1;
            newCart = [...rest, selectedItem];
        }
        setCart(newCart);
        // const newCart = [...cart, selectedItem];

        localStorageDb(selectedItem.id);
    }

    return (
        <div className='all-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCartItem={handleAddToCartItem}
                    ></Product>)
                }
            </div>
            <div className="cart-container">

                <Cart
                    cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;