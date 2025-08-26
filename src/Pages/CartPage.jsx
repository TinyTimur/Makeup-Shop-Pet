import { useCart } from '../Hooks/UseCart.js';
import { ProductTileInCart } from '../Modules/Components/ProductTileInCart/ProductTileInCart.jsx';
import { useEffect } from 'react';
import { useAuth } from '../Hooks/UseAuth.js';
import { useNavigate } from 'react-router-dom';

export default function CartPage() {
    const { cartContent, totalPrice, countTotalPrice } = useCart();
    const { isAuthorised, user } = useAuth();
    const navigate = useNavigate();
    console.log(cartContent);

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
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    return (
        <>
            <div className="">
                <h1>PRivet ya korzina I vo mne seychas в количестве штук</h1>

                {cartContent.map((product) => {
                    return (
                        <ProductTileInCart product={product} key={product.id} />
                    );
                })}

                <h2>Общая стоимость:{totalPrice}</h2>

                <button onClick={handleConfirmOrder}>Подтвердить заказ</button>
            </div>
        </>
    );
}
