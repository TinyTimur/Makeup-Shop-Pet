export function BuyControls({ buyAmount, setBuyAmount }) {
    function handleIncrement() {
        setBuyAmount(buyAmount + 1);
    }
    function handleDecrement() {
        setBuyAmount(buyAmount - 1);
    }

    return (
        <>
            <div>
                <h4>{buyAmount}</h4>
                <button
                    onClick={() => {
                        if (buyAmount < 1) {
                            setBuyAmount(0);
                        } else handleDecrement();
                    }}
                >
                    1234
                </button>
                <button
                    onClick={() => {
                        handleIncrement();
                    }}
                >
                    1234
                </button>
            </div>
        </>
    );
}
