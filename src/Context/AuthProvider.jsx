import { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext.js';

export function AuthProvider({ children }) {
    const [isAuthorised, setIsAuthorised] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthorised(true);
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
            <AuthContext.Provider value={{ isAuthorised, login, logout }}>
                {children}
            </AuthContext.Provider>
        </>
    );
}
