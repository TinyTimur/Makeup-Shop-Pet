import styles from './_Offer.module.scss';

export default function Offer({ offer }) {
    return (
        <>
            <li>
                <div className={styles.offer}>
                    <div className={styles.offer__title}>
                        <h4>{offer.title}</h4>
                    </div>

                    <img
                        src=""
                        alt=""
                        width={400}
                        height={300}
                        className={styles.offer__img}
                    />

                    <div className={styles.offer__description}>
                        <p>{offer.description}</p>
                    </div>

                    <h3 className={styles.offer__price}>
                        Price: {offer.price} $
                    </h3>
                    <h3 className={styles.offer__amount}>
                        Available: {offer.amount} pc's
                    </h3>

                    <button type={'button'} className={styles.offer__button}>
                        Buy
                    </button>
                </div>
            </li>
        </>
    );
}

//<ControlsButton/>
