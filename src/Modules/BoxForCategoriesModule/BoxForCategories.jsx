import Category from './CategoryComponent/Category.jsx';
import styles from './_BoxForCategories.module.scss';

export default function BoxForCategories({ categories }) {
    return (
        <>
            <ul className={styles.categoriesBox}>
                {categories.map((category) => {
                    return (
                        <Category
                            id={category.id}
                            key={category.id}
                            name={category.name}
                            description={category.description}
                        />
                    );
                })}
            </ul>
        </>
    );
}
