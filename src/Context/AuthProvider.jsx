import { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext.js';

export function AuthProvider({ children }) {
    const [isAuthorised, setIsAuthorised] = useState(false);
    const [user, setUser] = useState(null);

    function getUser() {
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
                console.log(data, 'recieved data on AuthProvider');
                setUser(data);
            })
            .catch((error) => {
                console.log(error.message);
                localStorage.removeItem('token');
                logout();
            });
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthorised(true);
            getUser();
        }
    }, []);

    const login = () => {
        setIsAuthorised(true);
    };

    const logout = () => {
        setIsAuthorised(false);
        localStorage.removeItem('token');
    };

    return (
        <>
            <AuthContext.Provider value={{ isAuthorised, login, logout, user }}>
                {children}
            </AuthContext.Provider>
        </>
    );
}

// наполняем и экспортируем контекст шаг 2
