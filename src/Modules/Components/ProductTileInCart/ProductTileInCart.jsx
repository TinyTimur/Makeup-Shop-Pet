import { useCart } from '../../../Hooks/UseCart.js';
import { useEffect } from 'react';
import styles from './_ProductTileInCart.module.scss';

export function ProductTileInCart({ product }) {
    const { cartContent, setCartContent } = useCart();

    useEffect(() => {
        console.log('Корзина обновлена', cartContent);
    }, [cartContent]);

    function handleIncrement() {
        setCartContent((prev) =>
            prev.map((cartItem) =>
                cartItem.id === product.id
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            )
        );
    }

    function handleDecrement() {
        setCartContent((prev) =>
            prev.map((cartItem) =>
                cartItem.id === product.id && cartItem.quantity > 0
                    ? { ...cartItem, quantity: cartItem.quantity - 1 }
                    : cartItem
            )
        );
    }

    return (
        <>
            <h3>Товар: {product.title}</h3>
            <h3>Кол-во:</h3>
            <div className={styles.amountControls}>
                <button onClick={handleDecrement}>-</button>
                <h3>{product.quantity}</h3>
                <button onClick={handleIncrement}>+</button>
            </div>
        </>
    );
}
