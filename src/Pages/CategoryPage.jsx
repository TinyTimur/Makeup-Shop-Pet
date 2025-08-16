import { useParams } from 'react-router-dom';
import BoxForOffers from '../Modules/BoxForOffersModule/BoxForOffers.jsx';

export default function CategoryPage({
    setSortOption,
    offers,
    buyAmount,
    setBuyAmount,
    setOpenProduct,
    openProduct,
}) {
    const { id } = useParams();
    console.log(openProduct);

    return (
        <>
            <div>
                <h1>Категория {id}</h1>
                <BoxForOffers
                    setOpenProduct={setOpenProduct}
                    buyAmount={buyAmount}
                    setBuyAmount={setBuyAmount}
                    category_id={id}
                    setSortOption={setSortOption}
                    offers={offers}
                    openProduct={openProduct}
                />
            </div>
        </>
    );
}
