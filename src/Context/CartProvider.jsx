import { CartContext } from './CartContext.js';
import { useState } from 'react';

export function CartProvider({ children }) {
    const [cartContent, setCartContent] = useState([]);

    function addToCart(product, quantity = 1) {
        setCartContent((cartContent) => {
            const existingProduct = cartContent.find(
                (cartItem) => cartItem.id === product.id
            );
            console.log(existingProduct, 'Existing product');

            if (existingProduct) {
                return cartContent.map((cartItem) => {
                    if (cartItem.id === product.id) {
                        return {
                            ...cartItem,
                            quantity: cartItem.quantity + quantity,
                        };
                    } else {
                        return cartItem;
                    }
                });
            }
            return [...cartContent, { ...product, quantity: quantity }];
        });
    }

    return (
        <>
            <CartContext.Provider
                value={{ cartContent, setCartContent, addToCart }}
            >
                {children}
            </CartContext.Provider>
        </>
    );
}
