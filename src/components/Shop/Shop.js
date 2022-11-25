import React, { useEffect, useState } from 'react';
import { localStorageDb } from '../../utilities/locatstoragedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([]);
    console.log(cart);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    const handleAddToCartItem = (selectedItem) => {
        // console.log('clicked');
        const newCart = [...cart, selectedItem];
        setCart(newCart);

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