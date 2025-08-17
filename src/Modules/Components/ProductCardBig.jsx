import styles from './_ProductCardBig.module.scss';

export default function ProductCardBig({ offer }) {
    console.log(offer);

    return (
        <>
            <div className={styles.productCardBig}>
                <div className={styles.productCardBig__main}>
                    <h2>{offer.title}</h2>
                    <img src="" alt="" width={400} height={400} />
                    <h3>Price: {offer.price} $</h3>
                    <h3>Available: {offer.amount} pc's</h3>
                </div>

                <div className={styles.productCardBig__description}>
                    <h3>{offer.description}</h3>
                </div>
            </div>
        </>
    );
}
