import styles from './_RegComponent.module.scss';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../Hooks/UseAuth.js';

export default function RegComponent({ setIsRegistered, isRegistered }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        repeatPassword: '',
    });

    const { login } = useAuth();

    const navigate = useNavigate();

    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        const valid =
            formData.name.length > 3 &&
            formData.password.length > 8 &&
            formData.repeatPassword.length > 8 &&
            formData.repeatPassword === formData.password;

        setIsFormValid(valid);
    }, [formData]);

    function handleFormSubmit(e) {
        e.preventDefault();
        console.log(formData);
        if (formData.password === formData.repeatPassword) {
            fetch('/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                }),
            })
                .then((res) => {
                    if (!res.ok) {
                        throw new Error('Login failed.');
                    }
                    return res.json();
                })
                .then((data) => {
                    console.log(data.message);
                    localStorage.setItem('token', data.token);
                    login();
                    navigate('/profile');
                })
                .catch((error) => {
                    console.error(error);
                })
                .finally(() => {
                    setFormData({
                        name: '',
                        email: '',
                        password: '',
                        repeatPassword: '',
                    });
                });
        }
    }

    return (
        <>
            <form className={styles.form}>
                <h2>Sign up</h2>

                <div className={styles.regLayout}>
                    <div>
                        <label htmlFor="'firstName'">Name</label>
                        <input
                            className={styles.regLayout__input}
                            value={formData.name}
                            type="text"
                            id="firstName"
                            required={true}
                            autoComplete="name"
                            onChange={(e) => {
                                console.log(isFormValid);
                                console.log(formData);
                                setFormData({
                                    ...formData,
                                    name: e.target.value,
                                });
                            }}
                        />
                    </div>
                    <div>
                        <label htmlFor="'email'">Email</label>
                        <input
                            className={styles.regLayout__input}
                            value={formData.email}
                            type="email"
                            id="email"
                            required={true}
                            autoComplete="email"
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
                            className={styles.regLayout__input}
                            value={formData.password}
                            type="text"
                            id="password"
                            required={true}
                            autoComplete="password"
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    password: e.target.value,
                                });
                            }}
                        />
                    </div>
                    <div>
                        <label htmlFor="confirm_password'">
                            Confirm Password
                        </label>
                        <input
                            className={styles.regLayout__input}
                            value={formData.repeatPassword}
                            type="text"
                            id="confirm_password"
                            required={true}
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    repeatPassword: e.target.value,
                                });
                            }}
                        />
                        {formData.repeatPassword !== formData.password ? (
                            <p>Passwords don't match</p>
                        ) : null}
                    </div>
                </div>
                <div>
                    <button
                        className={styles.regButton}
                        disabled={!isFormValid}
                        type={'submit'}
                        onClick={handleFormSubmit}
                    >
                        Register
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
                </div>
            </form>
        </>
    );
}
