import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../Hooks/UseAuth.js';
import styles from './_AuthComponent.module.scss';

export default function AuthComponent({ isRegistered, setIsRegistered }) {
    const navigate = useNavigate();
    const { isAuthorised, login } = useAuth();

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
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Login failed.');
                }
                return response.json();
            })
            .then((data) => {
                localStorage.setItem('token', data.token);
                login();
                navigate('/Profile');
            })
            .catch((error) => console.log(error))
            .finally(() => {
                setFormData({ email: '', password: '' });
                console.log(isAuthorised);
            });
    }

    const [isFormValid, setIsFormValid] = useState(false);
    const [formData, setFormData] = useState({ email: '', password: '' });

    useEffect(() => {
        const isValid =
            formData.email.length > 3 && formData.password.length > 8;
        setIsFormValid(isValid);
    }, [formData]);

    return (
        <>
            <form noValidate={true} className={styles.form}>
                <h2>Sign in</h2>
                <div className={styles.authLayout}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            className={styles.authLayout__input}
                            value={formData.email}
                            type="email"
                            id="email"
                            required={true}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    email: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div>
                        <label htmlFor="'password'">Password</label>
                        <input
                            className={styles.authLayout__input}
                            value={formData.password}
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
                </div>

                <button
                    className={styles.authButton}
                    disabled={!isFormValid}
                    type={'submit'}
                    onClick={(e) => handleSubmitButtonClick(e)}
                >
                    Log in
                </button>
                <button
                    className={styles.switchButton}
                    onClick={() => {
                        setIsRegistered(!isRegistered);
                    }}
                >
                    {!isRegistered
                        ? 'Already registered'
                        : 'Create new account'}
                </button>
            </form>
        </>
    );
}
