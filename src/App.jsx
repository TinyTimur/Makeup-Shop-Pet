import Header from './Modules/HeaderModule/Header.jsx';
import Footer from './Modules/FooterModule/Footer.jsx';
import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import CategoryPage from './Pages/CategoryPage.jsx';
import Home from './Pages/Home.jsx';
import ProductPage from './Pages/ProductPage.jsx';
import CartPage from './Pages/CartPage.jsx';
import AuthRegPage from './Pages/AuthRegPage.jsx';
import ProfilePage from './Pages/ProfilePage.jsx';
import * as url from 'node:url';

function App() {
    // States below

    const [sortOption, setSortOption] = useState({
        order: 'ASC',
        type: 'title',
    });

    const [offers, setOffers] = useState([]);
    const [categories, setCategories] = useState([]);

    // Fetch functions below

    useEffect(() => {
        const url = sortOption
            ? `/api/products?type=${sortOption.type}&order=${sortOption.order}`
            : '/api/products';

        fetch(url)
            .then((res) => res.json())
            .then((data) => setOffers(data))
            .catch((err) => console.error(err));
    }, [sortOption]);

    useEffect(() => {
        fetch('/api/categories')
            .then((res) => res.json())
            .then((data) => setCategories(data));
    }, []);

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
                                    offers={offers}
                                    setSortOption={setSortOption}
                                />
                            }
                        />

                        <Route
                            path={'/product/:id'}
                            element={<ProductPage offers={offers} />}
                        />

                        <Route path={'/cart'} element={<CartPage />} />

                        <Route
                            path={'/AuthRegPage'}
                            element={<AuthRegPage />}
                        />

                        <Route path={'/Profile'} element={<ProfilePage />} />
                    </Routes>
                </main>

                <footer className="footer">
                    <Footer />
                </footer>
            </section>
        </>
    );
}

export default App;
