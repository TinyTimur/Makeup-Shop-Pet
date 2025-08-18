import styles from './_BuyControls.module.scss';

export function BuyControls({ buyAmount, setBuyAmount }) {
    function handleIncrement() {
        setBuyAmount(buyAmount + 1);
    }
    function handleDecrement() {
        setBuyAmount(buyAmount - 1);
    }

    return (
        <>
            <div className={styles.BuyControls}>
                <button
                    className={styles.incrdecrbutton}
                    onClick={() => {
                        if (buyAmount < 1) {
                            setBuyAmount(0);
                        } else handleDecrement();
                    }}
                >
                    -
                </button>
                <h4>{buyAmount}</h4>
                <button
                    className={styles.incrdecrbutton}
                    onClick={() => {
                        handleIncrement();
                    }}
                >
                    +
                </button>

                <button type={'button'}>Buy</button>
            </div>
        </>
    );
}
