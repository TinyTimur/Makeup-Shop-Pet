import { useCart } from '../../../Hooks/UseCart.js';
import { useEffect } from 'react';
import styles from './_ProductTileInCart.module.scss';
import image from '../../../assets/biegeMarble.jpg';

export function ProductTileInCart({ product }) {
    const { setCartContent, cartContent } = useCart();
    useEffect(() => {
        console.log('Корзина обновлена', cartContent);
    }, [cartContent]);

    function handleDeleteProductFromCart() {
        setCartContent((prev) => {
            return prev.filter((cartItem) => cartItem.id !== product.id);
        });
    }

    function handleIncrement() {
        setCartContent((prev) => {
            console.log(prev, 'prev');
            return prev.map((cartItem) =>
                cartItem.id === product.id
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            );
        });
    }

    function handleDecrement() {
        setCartContent((prev) => {
            return prev.map((cartItem) => {
                if (cartItem.quantity === 1) {
                    handleDeleteProductFromCart();
                }

                return cartItem.id === product.id && cartItem.quantity > 1
                    ? { ...cartItem, quantity: cartItem.quantity - 1 }
                    : cartItem;
            });
        });
    }

    return (
        <>
            <div className={styles.itemWrapper}>
                <img
                    className={styles.itemWrapper__img}
                    src={image}
                    alt=""
                    width="200"
                    height="200"
                />

                <div className={styles.productDetails}>
                    <h4>Product: {product.title}</h4>

                    <div className={styles.itemWrapper__controls}>
                        <h4>Amount:</h4>
                        <div className={styles.buttons}>
                            <button
                                onClick={handleDecrement}
                                className={styles.button}
                            >
                                -
                            </button>
                            <div
                                className={styles.itemWrapper__quantityWrapper}
                            >
                                <h3>{product.quantity}</h3>
                            </div>
                            <button
                                onClick={handleIncrement}
                                className={styles.button}
                            >
                                +
                            </button>
                            <button
                                className={styles.delete_button}
                                onClick={handleDeleteProductFromCart}
                            >
                                <span className={styles.delete_button__icon}>
                                    X
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
