import styles from './_SortComponent.module.scss';

export default function SortComponent({ setSortOption }) {
    return (
        <>
            <div className={styles.sort}>
                <label htmlFor="sortBy">Sort By: </label>
                <select
                    id="sortBy"
                    onChange={(e) =>
                        setSortOption({
                            order: e.target.value,
                            type: e.target.selectedOptions[0].dataset.jsValue,
                        })
                    }
                >
                    <option
                        value={null}
                        selected={true}
                        disabled={true}
                        defaultValue={null}
                    >
                        Choose an option
                    </option>
                    <option value="ASC" data-js-value={'title'}>
                        Default
                    </option>
                    <option value="ASC" data-js-value={'price'}>
                        Price Ascending
                    </option>
                    <option value="DESC" data-js-value={'price'}>
                        Price Descending
                    </option>
                    <option value="ASC" data-js-value={'amount'}>
                        Amount Ascending
                    </option>
                    <option value="DESC" data-js-value={'amount'}>
                        Amount Descending
                    </option>
                </select>
            </div>
        </>
    );
}
