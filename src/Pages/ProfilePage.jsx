import { useAuth } from '../Hooks/UseAuth.js';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function ProfilePage() {
    const navigate = useNavigate();
    const { isAuthorised, logout } = useAuth();
    const [user, setUser] = useState({ id: '', email: '' });

    useEffect(() => {
        fetch('/api/users', {
            method: 'GET',
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('token'),
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                console.log(response);
                return response.json();
            })
            .then((data) => {
                console.log(data, 'recieved data');
                setUser({ id: data.id, email: data.email });
                console.log(user, 'user after setting');
            })
            .catch((error) => {
                console.log(error.message);
                localStorage.removeItem('token');
                logout();
            });
    }, []);

    return (
        <>
            {isAuthorised ? (
                <>
                    <section>
                        <img src="" alt="" width={200} height={200} />
                        <h2>{user.id}</h2>
                        <p>Email: {user.email}</p>
                        <p>Location: New York, USA</p>
                        <p>
                            Bio: Passionate about technology, traveling, and
                            photography.
                        </p>
                    </section>
                    <section>
                        <h3>Details</h3>
                        <ul>
                            <li>Age: 28</li>
                            <li>Occupation: Web Developer</li>
                            <li>Joined: January 2023</li>
                        </ul>
                    </section>
                    <section>
                        <h3>Interests</h3>
                        <ul>
                            <li>Coding</li>
                            <li>Hiking</li>
                            <li>Gaming</li>
                            <li>Music</li>
                        </ul>

                        <button
                            onClick={() => {
                                navigate('/AuthRegPage');
                                logout();
                            }}
                        >
                            Выйти из профиля
                        </button>
                    </section>
                </>
            ) : (
                "You're not authorised"
            )}
        </>
    );
}
