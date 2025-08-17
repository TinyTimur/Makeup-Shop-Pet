import ProductCardBig from '../Modules/Components/ProductCardBig.jsx';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function ProductPage() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`/api/products/${id}`)
            .then((response) => {
                {
                    if (!response.ok) {
                        throw new Error(response.statusText);
                    }
                    return response.json();
                }
            })
            .then((data) => {
                setProduct(Array.isArray(data) ? data[0] : data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
                console.log(error);
            });
    }, [id]);

    console.log(product);

    if (loading) return <h2>Загрузка...</h2>;
    if (error) return <h2>{error}</h2>;
    if (!product) return <h2>Товар не найден</h2>;

    return <ProductCardBig offer={product} />;
}
