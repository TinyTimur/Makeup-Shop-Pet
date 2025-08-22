import styles from './_Offer.module.scss';
import { BuyControls } from '../BuyControlsComponent/BuyControls.jsx';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Offer({ offer }) {
    return (
        <>
            <li>
                <div className={styles.offer}>
                    <Link
                        to={`/product/${offer.id}`}
                        className={styles.offer__title}
                    >
                        <div className={styles.offer__title}>
                            <h4>{offer.title}</h4>
                        </div>
                    </Link>

                    <Link
                        to={`/product/${offer.id}`}
                        className={styles.offer__img}
                    >
                        <img
                            src=""
                            alt=""
                            width={400}
                            height={300}
                            className={styles.offer__img}
                        />
                    </Link>

                    <div className={styles.offer__description}>
                        <p>{offer.description}</p>
                    </div>

                    <h4 className={styles.offer__price}>
                        Price: {offer.price} $
                    </h4>
                    <h4 className={styles.offer__amount}>
                        Available: {offer.amount} pc's
                    </h4>

                    <div className={styles.offer__button}>
                        <BuyControls offer={offer} />
                    </div>
                </div>
            </li>
        </>
    );
}

//<ControlsButton/>
