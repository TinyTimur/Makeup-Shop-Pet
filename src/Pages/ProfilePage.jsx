import { useAuth } from '../Hooks/UseAuth.js';
import { useNavigate } from 'react-router-dom';

export default function ProfilePage() {
    const { isAuthorised, logout } = useAuth();
    const navigate = useNavigate();

    return (
        <>
            {isAuthorised ? (
                <>
                    <section>
                        <img src="" alt="" width={200} height={200} />
                        <h2></h2>
                        <p>Email: </p>
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
