import ProductCardBig from '../Modules/Components/ProductCardBig.jsx';

export default function ProductPage({ offer }) {
    console.log(offer, 'Eto prihodit');
    return (
        <>
            <ProductCardBig offer={offer} />
        </>
    );
}
