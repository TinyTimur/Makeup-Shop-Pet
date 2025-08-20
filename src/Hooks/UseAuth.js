import { AuthContext } from '../Context/AuthContext.js';
import { useContext } from 'react';

export function useAuth() {
    return useContext(AuthContext);
}
