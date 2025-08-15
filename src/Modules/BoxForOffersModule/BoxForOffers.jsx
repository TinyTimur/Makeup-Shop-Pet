import Offer from './OfferComponent/Offer.jsx';
import styles from './_BoxForOffers.module.scss';
import SortComponent from './SortComponent/SortComponent.jsx';
import { NoProductsMessage } from '../Messages/NoProductsMessage/NoProductsMessage.jsx';

export default function BoxForOffers({ setSortOption, offers, category_id }) {
    let filteredOffers = offers.filter((offer) => {
        return offer.category_id === Number(category_id);
    });

    console.log(filteredOffers);

    return (
        <>
            {filteredOffers.length > 0 && (
                <SortComponent setSortOption={setSortOption} />
            )}

            {filteredOffers.length > 0 ? (
                <ul className={styles.offersBox}>
                    {filteredOffers.map((offer) => (
                        <Offer key={offer.id} offer={offer} />
                    ))}
                </ul>
            ) : (
                <NoProductsMessage />
            )}
        </>
    );
}
