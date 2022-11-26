import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/locatstoragedb";

const useCart = (products) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = getStoredCart();
        let savedCart = [];
        for (const id in storedCart) {
            const choosedProduct = products.find(item => item.id === id);
            if (choosedProduct) {
                const quantity = storedCart[id];
                choosedProduct.quantity = quantity;
                savedCart.push(choosedProduct);
            }
        }
        setCart(savedCart);
    }, [products])

    return [cart, setCart];
}

export default useCart;