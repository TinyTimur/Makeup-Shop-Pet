import { useCart } from '../../Hooks/UseCart.js';
import { useAuth } from '../../Hooks/UseAuth.js';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ProductTileInCart } from '../Components/ProductTileInCart/ProductTileInCart.jsx';
import styles from './_CartModule.module.scss';

export function CartModule() {
    const { cartContent, totalPrice, countTotalPrice, setCartContent } =
        useCart();
    const { isAuthorised, user } = useAuth();
    const navigate = useNavigate();
    console.log(cartContent);

    useEffect(() => {
        if (!isAuthorised) {
            setCartContent([]);
        }
    }, []);

    useEffect(() => {
        countTotalPrice(cartContent);
    }, [cartContent]);

    function handleConfirmOrder() {
        if (!isAuthorised) {
            navigate('/AuthRegPage');
            return;
        }

        const orderPayLoad = {
            user_id: user.id,
            items: cartContent.map((item) => ({
                product_id: item.id,
                quantity: item.quantity,
            })),
        };

        fetch('/api/carts/postCart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderPayLoad),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                console.log(response);
                return response.json();
            })
            .then((data) => {
                console.log(data, 'recieved data on cartpage');
                setCartContent([]);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }
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

                <div>
                    <h2>Общая стоимость:{totalPrice}</h2>
                    <button
                        disabled={!cartContent.length > 0}
                        onClick={handleConfirmOrder}
                    >
                        Подтвердить заказ
                    </button>
                </div>
            </div>
        </>
    );
}
