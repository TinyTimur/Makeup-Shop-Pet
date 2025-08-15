import HeroModule from '../Modules/HeroModule/HeroModule.jsx';
import BoxForCategories from '../Modules/BoxForCategoriesModule/BoxForCategories.jsx';

export default function Home({ categories }) {
    return (
        <>
            <HeroModule />
            <BoxForCategories categories={categories} />
        </>
    );
}
