import React from 'react';
import useCart from '../../hooks/useCart';
import useProduct from '../../hooks/useProduct';
import { removeFromDb } from '../../utilities/locatstoragedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products, setProducts] = useProduct();
    const [cart, setCart] = useCart(products);
    // console.log(products.length);
    const handleRemoveItem = (clickedProduct) =>{
        // console.log(clickedProduct);
        const restProducts = cart.filter(product => product.id !== clickedProduct.id);
        setCart(restProducts); 
        removeFromDb(clickedProduct.id);

    }

    return (
        <div className='all-container'>
            <div className="review-product-container">
                {
                    cart.map(product => <ReviewItem
                    key={product.id}
                    product={product}
                    handleRemoveItem = {handleRemoveItem}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                ></Cart>
            </div>
        </div>
    );
}

export default OrderReview;