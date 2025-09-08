import styles from './_BuyControls.module.scss';
import { useCart } from '../../../Hooks/UseCart.js';
import { useState } from 'react';

export function BuyControls({ offer }) {
    const { addToCart, cartContent } = useCart();

    const [buyAmount, setBuyAmount] = useState(0);

    const [addedToCartMessage, setAddedToCartMessage] = useState(null);

    function handleIncrement() {
        setBuyAmount(buyAmount + 1);
    }
    function handleDecrement() {
        setBuyAmount(buyAmount - 1);
    }

    function handleAddToCartClick() {
        if (buyAmount === 0) {
            setAddedToCartMessage("Can't add 0 products to cart");
            setTimeout(() => {
                setAddedToCartMessage(null);
            }, 2000);
        } else {
            addToCart(offer, buyAmount);
            console.log(cartContent);
            setBuyAmount(0);
            setAddedToCartMessage('Added to cart');
            setTimeout(() => {
                setAddedToCartMessage(null);
            }, 2000);
        }
    }

    return (
        <>
            <div className={styles.BuyControls}>
                <button
                    className={styles.incrdecrbutton}
                    onClick={() => {
                        if (buyAmount < 1) {
                            setBuyAmount(0);
                        } else handleDecrement();
                    }}
                >
                    -
                </button>

                <h4 className={styles.amount}>{buyAmount}</h4>
                <button
                    className={styles.incrdecrbutton}
                    onClick={() => {
                        handleIncrement();
                    }}
                >
                    +
                </button>

                <button
                    className={styles.addtocartbutton}
                    onClick={handleAddToCartClick}
                    type={'button'}
                >
                    Add To Cart
                </button>
                {addedToCartMessage}
            </div>
        </>
    );
}
