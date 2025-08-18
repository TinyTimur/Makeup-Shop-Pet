export default function AuthComponent() {
    function handleSubmitButtonClick(e) {
        e.preventDefault();
        console.log('button clicked');
    }

    return (
        <>
            <form noValidate={true} action="">
                <legend>Authorisation Form</legend>

                <div>
                    <label htmlFor="'firstName'">Email</label>
                    <input type="email" id="email" required={true} />
                </div>
                <div>
                    <label htmlFor="'firstName'">Password</label>
                    <input type="password" id="password" required={true} />
                </div>

                <button
                    type={'submit'}
                    onClick={(e) => handleSubmitButtonClick(e)}
                >
                    Log in
                </button>
            </form>
        </>
    );
}
