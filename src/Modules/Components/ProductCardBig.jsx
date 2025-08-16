import styles from './_ProductCardBig.module.scss';

export default function ProductCardBig({ offer }) {
    return (
        <>
            <div className={styles.productCardBig}>
                <img src="" alt="" width={400} height={600} />

                <div className={styles.productCardBig}>
                    <h3>Price: {offer.price} $</h3>
                    <h3>Available: {offer.amount} pc's</h3>
                </div>
            </div>
        </>
    );
}
