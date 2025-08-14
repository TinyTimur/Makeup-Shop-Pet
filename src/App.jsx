import Header from './Modules/HeaderModule/Header.jsx';
import HeroModule from './Modules/HeroModule/HeroModule.jsx';
import Footer from './Modules/FooterModule/Footer.jsx';
import BoxForOffers from './Modules/BoxForOffersModule/BoxForOffers.jsx';
import BoxForCategories from './Modules/BoxForCategoriesModule/BoxForCategories.jsx';
import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
    // States below

    const [sortOption, setSortOption] = useState({
        order: 'ASC',
        type: 'title',
    });

    const [offers, setOffers] = useState([]);

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

                <div className="main">
                    <HeroModule />

                    <BoxForCategories categories={categories} />

                    {/*<BoxForOffers*/}
                    {/*    setSortOption={setSortOption}*/}
                    {/*    offers={offers}*/}
                    {/*/>*/}
                </div>

                <footer className="footer">
                    <Footer />
                </footer>
            </section>
        </>
    );
}

export default App;
