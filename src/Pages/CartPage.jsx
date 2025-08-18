export default function CartPage({ cartContent }) {
    return (
        <>
            <div className="">
                <h1>
                    PRivet ya korzina I vo mne seychas {cartContent.product} в
                    количестве {cartContent.amount} штук
                </h1>
            </div>
        </>
    );
}
