import styles from './_Category.module.scss';
import { Link } from 'react-router-dom';

export default function Category(props) {
    return (
        <>
            <li className={styles.category__item}>
                <Link
                    to={`/category/${props.id}`}
                    className={styles.category__link}
                >
                    <h1 className={styles.category__title}>{props.name}</h1>
                    <img
                        src=""
                        width={700}
                        height={700}
                        className={styles.category__image}
                    />
                    <h2 className={styles.category__description}>
                        {props.description}
                    </h2>
                </Link>
                <a href="#" className={styles.category__link}></a>
            </li>
        </>
    );
}
