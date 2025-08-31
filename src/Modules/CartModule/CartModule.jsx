import { useCart } from '../../Hooks/UseCart.js';

import { useEffect } from 'react';
import { ProductTileInCart } from '../Components/ProductTileInCart/ProductTileInCart.jsx';
import styles from './_CartModule.module.scss';
import { PrettyPinkButton } from '../Components/PrettyPinkButton/PrettyPinkButton.jsx';

export function CartModule() {
    const { cartContent, countTotalPrice, totalPrice } = useCart();

    // useEffect(() => {
    //     if (!isAuthorised) {
    //         setCartContent([]);
    //     }
    // }, []);

    useEffect(() => {
        countTotalPrice(cartContent);
    }, [cartContent]);

    return (
        <>
            <div className={styles.cartLayout}>
                <div className={styles.cartItems}>
                    {cartContent.map((product) => {
                        return (
                            <ProductTileInCart
                                product={product}
                                key={product.id}
                            />
                        );
                    })}
                </div>

                <div className={styles.cartDetails}>
                    <div className={styles.priceWrapper}>
                        <h3>Total Price: {totalPrice}</h3>
                    </div>

                    <div className={styles.cartControls}>
                        <PrettyPinkButton action={'Confirm Purchase'} />
                        <PrettyPinkButton action={'Clear Cart'} />
                    </div>
                </div>
            </div>
        </>
    );
}
