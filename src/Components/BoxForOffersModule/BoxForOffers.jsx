import Offer from './OfferComponent/Offer.jsx';
import styles from './_BoxForOffers.module.scss';
import SortComponent from '../HeroModule/SortComponent/SortComponent.jsx';

// insert offers into state from db fetch here

export default function BoxForOffers({ setSortOption, sortOption, offers }) {
    return (
        <>
            <SortComponent setSortOption={setSortOption} />

            {/*{offers.map((offer) => {*/}
            {/*    return (*/}
            {/*        <Offer*/}
            {/*            key={offer.id}*/}
            {/*            title={offer.title}*/}
            {/*            description={offer.description}*/}
            {/*            amount={offer.amount}*/}
            {/*            price={offer.price}*/}
            {/*        />*/}
            {/*    );*/}
            {/*})}*/}

            <ul className={styles.offersBox}>
                <li className={styles.offersBox__item}>
                    <Offer content={'lorem1'} />
                </li>
                <li className={styles.offersBox__item}>
                    <Offer content={'lorem2'} />
                </li>
                <li className={styles.offersBox__item}>
                    <Offer content={'lorem3'} />
                </li>
                <li className={styles.offersBox__item}>
                    <Offer content={'lorem4'} />
                </li>
            </ul>
        </>
    );
}
