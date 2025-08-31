import styles from './_BuyControls.module.scss';
import { useCart } from '../../../Hooks/UseCart.js';
import { useState } from 'react';

export function BuyControls({ offer }) {
    const { addToCart, cartContent } = useCart();

    const [buyAmount, setBuyAmount] = useState(0);

    function handleIncrement() {
        setBuyAmount(buyAmount + 1);
    }
    function handleDecrement() {
        setBuyAmount(buyAmount - 1);
    }

    function handleAddToCartClick() {
        addToCart(offer, buyAmount);
        console.log(cartContent);
        setBuyAmount(0);
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
            </div>
        </>
    );
}
