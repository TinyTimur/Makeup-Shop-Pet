import styles from './_RegComponent.module.scss';
import { useState } from 'react';

export default function RegComponent() {
    const [FormData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleOtladka = () => {
        console.log(FormData);
    };

    function handleFormSubmit() {
        fetch('');
    }

    return (
        <>
            <form action="" onSubmit={handleFormSubmit}>
                <legend>Registration Form</legend>
                <div>
                    <label htmlFor="'firstName'">Name</label>
                    <input
                        type="text"
                        id="firstName"
                        required={true}
                        autoComplete="name"
                        onChange={(e) =>
                            setFormData({ ...FormData, name: e.target.value })
                        }
                    />
                </div>
                <div>
                    <label htmlFor="'firstName'">Email</label>
                    <input
                        type="email"
                        id="email"
                        required={true}
                        autoComplete="email"
                        onChange={(e) =>
                            setFormData({ ...FormData, email: e.target.value })
                        }
                    />
                </div>
                <div>
                    <label htmlFor="'firstName'">Password</label>
                    <input
                        type="password"
                        id="password"
                        required={true}
                        autoComplete="password"
                        onChange={(e) => {
                            setFormData({
                                ...FormData,
                                password: e.target.value,
                            });
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="'firstName'">Confirm Password</label>
                    <input
                        type="password"
                        id="confirm_password"
                        required={true}
                    />
                </div>

                <button type={'submit'}>Register</button>

                <button onClick={handleOtladka}>Press me to otladka</button>
            </form>
        </>
    );
}
