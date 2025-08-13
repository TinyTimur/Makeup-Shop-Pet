import styles from './_WelcomeMessage.module.scss';
import paperTexture from '../../../assets/paperTexture.png';

export default function WelcomeMessage() {
    return (
        <>
            <section className={styles.welcome}>
                <img
                    src={paperTexture}
                    alt=""
                    width={1800}
                    height={500}
                    className={styles.welcome__welcomeImage}
                />

                <div className={styles.welcome__descWrapper}>
                    <h2>Welcome to our Shop</h2>
                    <h4>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Illum, iure.
                    </h4>
                </div>
            </section>
        </>
    );
}
