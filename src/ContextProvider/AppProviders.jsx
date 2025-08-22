import { AuthProvider } from '../Context/AuthProvider.jsx';

export const AppProviders = ({ children }) => {
    return <AuthProvider>{children}</AuthProvider>;
};

// Враппим контексты разные в один AppProviders шаг 3
