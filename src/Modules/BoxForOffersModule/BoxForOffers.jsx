import Offer from './OfferComponent/Offer.jsx';
import styles from './_BoxForOffers.module.scss';
import SortComponent from './SortComponent/SortComponent.jsx';

// insert offers into state from db fetch here

export default function BoxForOffers({ setSortOption, offers }) {
    return (
        <>
            <SortComponent setSortOption={setSortOption} />

            <ul className={styles.offersBox}>
                {offers.map((offer) => {
                    console.log(offers);
                    return <Offer key={offer.id} offer={offer}></Offer>;
                })}
            </ul>
        </>
    );
}
