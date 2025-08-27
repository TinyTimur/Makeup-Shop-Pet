import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Hooks/UseAuth.js';
import { useEffect } from 'react';
import styles from './_ProfileModule.module.scss';
import { useCart } from '../../Hooks/UseCart.js';

export function ProfileModule() {
    const navigate = useNavigate();
    const { isAuthorised, logout, user } = useAuth();
    const { cartContent } = useCart();

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
                            <p>Location: New York, USA</p>
                            <p>
                                Bio: Passionate about technology, traveling, and
                                photography.
                            </p>
                        </section>
                        <section className={styles.ProfileLayout__details}>
                            <h3>Details</h3>
                            <ul>
                                <li>Age: 28</li>
                                <li>Occupation: Web Developer</li>
                                <li>Joined: January 2023</li>
                            </ul>
                        </section>
                        <section className={styles.ProfileLayout__interests}>
                            <h3>Interests</h3>
                            <ul>
                                <li>Coding</li>
                                <li>Hiking</li>
                                <li>Gaming</li>
                                <li>Music</li>
                            </ul>
                        </section>
                        <div className={styles.quit}>
                            <button
                                onClick={() => {
                                    navigate('/AuthRegPage');
                                    logout();
                                }}
                            >
                                Выйти из профиля
                            </button>
                        </div>
                        <div className={styles.ProfileLayout__cart}>
                            <h3>Ваша корзина</h3>
                            {cartContent.map((item, index) => {
                                if (index < 3) {
                                    return <h2>12345</h2>;
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
