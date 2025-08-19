import { useEffect, useState } from 'react';

export default function AuthComponent() {
    function handleSubmitButtonClick(e) {
        console.log(formData);
        e.preventDefault();
        fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: formData.email,
                password: formData.password,
            }),
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
    }

    const handleOtladka = () => {
        console.log(formData);
    };

    const [isFormValid, setIsFormValid] = useState(false);
    const [formData, setFormData] = useState({ email: '', password: '' });

    useEffect(() => {
        const isValid =
            formData.email.length > 3 && formData.password.length > 8;
        setIsFormValid(isValid);
    }, [formData]);

    return (
        <>
            <form noValidate={true} action="">
                <legend>Authorization Form</legend>

                <div>
                    <label htmlFor="'firstName'">Email</label>
                    <input
                        type="email"
                        id="email"
                        required={true}
                        onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                        }
                    />
                </div>
                <div>
                    <label htmlFor="'firstName'">Password</label>
                    <input
                        type="password"
                        id="password"
                        required={true}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                password: e.target.value,
                            })
                        }
                    />
                </div>

                <button
                    disabled={!isFormValid}
                    type={'submit'}
                    onClick={(e) => handleSubmitButtonClick(e)}
                >
                    Log in
                </button>

                <button type={'button'} onClick={handleOtladka}>
                    Press me to otladka
                </button>
            </form>

            <h1></h1>
        </>
    );
}
