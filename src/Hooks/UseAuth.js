import { AuthContext } from '../Context/AuthContext.js';
import { useContext } from 'react';

export function useAuth() {
    return useContext(AuthContext);
}

// Экспортируем объект с контекстом как useAuth() шаг 4
