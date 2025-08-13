import Header from './Components/HeaderModule/Header.jsx';
import HeroModule from './Components/HeroModule/HeroModule.jsx';
import Footer from './Components/FooterModule/Footer.jsx';
import BoxForOffers from './Components/BoxForOffersModule/BoxForOffers.jsx';
import { useEffect, useState } from 'react';

function App() {
    // States below

    const [sortOption, setSortOption] = useState({ order: '', type: '' });
    const [offers, setOffers] = useState([]);

    // Fetch functions below
    // Create test Db Data and fetch it here, don't forget to make an endpoint.
    useEffect(() => {
        fetch();
    }, []);

    return (
        <>
            <section className="layout">
                <header className="header">
                    <Header />
                </header>

                <div className="main">
                    <HeroModule />
                    <BoxForOffers
                        setSortOption={setSortOption}
                        sortOption={sortOption}
                    />
                </div>

                <footer className="footer">
                    <Footer />
                </footer>
            </section>
        </>
    );
}

export default App;
