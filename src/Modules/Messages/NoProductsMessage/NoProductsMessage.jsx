import styles from './_NoProductsMessage.module.scss';

export function NoProductsMessage() {
    return (
        <>
            <div className={styles.NoProductsMessageWrapper}>
                <h2 className={styles.NoProductsMessage}>
                    No Products in <br />
                    This category Unfortunately :(
                </h2>
            </div>
        </>
    );
}
