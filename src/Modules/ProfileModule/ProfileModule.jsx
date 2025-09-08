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
                        <div className={styles.infoWrapper}>
                            <div
                                className={
                                    styles.ProfileLayout__profilePicWrapper
                                }
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

                            <div className={styles.ProfileLayout__quit}>
                                <button
                                    className={
                                        styles.ProfileLayout__quit__button
                                    }
                                    onClick={() => {
                                        navigate('/AuthRegPage');
                                        setCartContent([]);
                                        logout();
                                    }}
                                >
                                    Quit
                                </button>
                            </div>
                        </div>

                        <div className={styles.ProfileLayout__cart}>
                            <h3>Cart:</h3>
                            <div className={styles.ProfileLayout__cart__items}>
                                {cartContent.map((cartItem) => {
                                    return (
                                        <div>
                                            <img
                                                src=""
                                                alt=""
                                                width={100}
                                                height={100}
                                                key={cartItem.id}
                                            />
                                            <h2>{cartItem.title}</h2>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                "You're not authorised"
            )}
        </>
    );
}
