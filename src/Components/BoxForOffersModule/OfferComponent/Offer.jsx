import styles from './_Offer.module.scss';

export default function Offer({ content }) {
    return (
        <>
            <div className={styles.offer}>
                <div className={styles.offer__title}>
                    <h4>{content}</h4>
                </div>

                <img
                    src=""
                    alt=""
                    width={300}
                    height={300}
                    className={styles.offer__img}
                />

                <div className={styles.offer__description}>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>

                <button type={'button'} className={styles.offer__button}>
                    Buy
                </button>
            </div>
        </>
    );
}

//<ControlsButton/>
