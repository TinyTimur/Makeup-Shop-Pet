import styles from '../FooterModule/_FooterModule.module.scss';

export default function Footer() {
    return (
        <>
            <section className={styles.footer}>
                <div className={styles.footer__item}>
                    <h3>Map</h3>
                    <h3>Something</h3>
                </div>
                <div className="">
                    <h1>ShopName</h1>
                </div>
                <div className={styles.footer__item}>
                    <h3>Map</h3>
                    <h3>Something</h3>
                </div>
            </section>
        </>
    );
}
