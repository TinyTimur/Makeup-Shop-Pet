import { useParams } from 'react-router-dom';
import BoxForOffers from '../Modules/BoxForOffersModule/BoxForOffers.jsx';

export default function CategoryPage({
    setSortOption,
    offers,
    buyAmount,
    setBuyAmount,
}) {
    const { id } = useParams();

    return (
        <>
            <div>
                <h1>Категория {id}</h1>
                <BoxForOffers
                    buyAmount={buyAmount}
                    setBuyAmount={setBuyAmount}
                    category_id={id}
                    setSortOption={setSortOption}
                    offers={offers}
                />
            </div>
        </>
    );
}
