import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Hooks/UseAuth.js';
import { useEffect } from 'react';
import styles from './_ProfileModule.module.scss';
import { useCart } from '../../Hooks/UseCart.js';

export function ProfileModule() {
    const navigate = useNavigate();
    const { isAuthorised, logout, user } = useAuth();
    const { cartContent, setCartContent } = useCart();

    useEffect(() => {
        console.log('page reloaded to load content');
    }, [user]);

    return (
        <>
            {isAuthorised ? (
                <>
                    <div className={styles.ProfileLayout}>
                        <div
                            className={styles.ProfileLayout__profilePicWrapper}
                        >
                            <img
                                src=""
                                alt=""
                                width={200}
                                height={200}
                                className={styles.ProfilePicture}
                            />
                        </div>

                        <section className={styles.ProfileLayout__intro}>
                            <h2>{!user ? 'loading' : user.id}</h2>
                            <p>Email: {!user ? 'loading' : user.email}</p>
                            <p>Location: </p>
                            <p>Bio:</p>
                        </section>
                        <section className={styles.ProfileLayout__details}>
                            <h3>Details</h3>
                            <ul>
                                <li></li>
                            </ul>
                        </section>
                        <section className={styles.ProfileLayout__interests}>
                            <h3>Interests</h3>
                            <ul>
                                <li></li>
                            </ul>
                        </section>
                        <div className={styles.ProfileLayout__quit}>
                            <button
                                onClick={() => {
                                    navigate('/AuthRegPage');
                                    setCartContent([]);
                                    logout();
                                }}
                            >
                                Выйти из профиля
                            </button>
                        </div>
                        <div className={styles.ProfileLayout__cart}>
                            <h3>Cart:</h3>
                            {cartContent.map((item, index) => {
                                if (index < 3) {
                                    return <h2 key={index}>12345</h2>;
                                } else {
                                    return null;
                                }
                            })}
                            <h3>...</h3>
                        </div>
                    </div>
                </>
            ) : (
                "You're not authorised"
            )}
        </>
    );
}
