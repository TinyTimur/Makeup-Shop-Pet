import styles from './_PrettyPinkButton.module.scss';
import { useCart } from '../../../Hooks/UseCart.js';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../Hooks/UseAuth.js';

export function PrettyPinkButton({ action }) {
    const { cartContent, setCartContent } = useCart();

    const { isAuthorised, user } = useAuth();
    const navigate = useNavigate();

    function handleClearCart() {
        setCartContent([]);
    }

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
            <button
                disabled={!cartContent.length > 0}
                onClick={
                    action === 'Confirm Purchase'
                        ? handleConfirmOrder
                        : handleClearCart
                }
                className={styles.softPill}
            >
                <h3>{action}</h3>
            </button>
        </>
    );
}
