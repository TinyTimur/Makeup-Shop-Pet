import Header from './Modules/HeaderModule/Header.jsx';

import Footer from './Modules/FooterModule/Footer.jsx';
import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import CategoryPage from './Pages/CategoryPage.jsx';
import Home from './Pages/Home.jsx';
import { BuyControls } from './Modules/BoxForOffersModule/BuyControlsComponent/BuyControls.jsx';
import ProductPage from './Pages/ProductPage.jsx';

function App() {
    // States below

    const [sortOption, setSortOption] = useState({
        order: 'ASC',
        type: 'title',
    });

    const [buyAmount, setBuyAmount] = useState(0);

    const [offers, setOffers] = useState([]);

    console.log(offers);

    // const [categories, setCategories] = useState([]);

    // Fetch functions below
    // Create test Db Data and fetch it here, don't forget to make an endpoint.

    useEffect(() => {
        const url = sortOption
            ? `/api/products?type=${sortOption.type}&order=${sortOption.order}`
            : '/api/products';

        fetch(url)
            .then((res) => res.json())
            .then((data) => setOffers(data))
            .catch((err) => console.error(err));
    }, [sortOption]);

    // useEffect(() => {
    //     const url = '/api/categories';
    //
    //     fetch(url)
    //         .then((res) => res.json())
    //         .then((data) => setCategories(data))
    //         .catch((err) => console.error(err));
    // }, []);

    const categories = [
        { id: 1, name: 'category1', description: 'Description1' },
        { id: 2, name: 'category2', description: 'Description2' },
        { id: 3, name: 'category3', description: 'Description3' },
        { id: 4, name: 'category4', description: 'Description4' },
    ];

    return (
        <>
            <section className="layout">
                <header className="header">
                    <Header />
                </header>

                <main className="main">
                    <Routes>
                        <Route
                            path="/"
                            element={<Home categories={categories} />}
                        />
                        <Route
                            path="/category/:id"
                            element={
                                <CategoryPage
                                    setBuyAmount={setBuyAmount}
                                    buyAmount={buyAmount}
                                    offers={offers}
                                    setSortOption={setSortOption}
                                />
                            }
                        />

                        <Route
                            path={'/product/:id'}
                            element={<ProductPage offers={offers} />}
                        />
                    </Routes>
                </main>

                <footer className="footer">
                    <BuyControls
                        buyAmount={buyAmount}
                        setBuyAmount={setBuyAmount}
                    />
                    <Footer />
                </footer>
            </section>
        </>
    );
}

export default App;
