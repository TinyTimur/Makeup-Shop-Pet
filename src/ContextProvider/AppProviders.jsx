import { AuthProvider } from '../Context/AuthProvider.jsx';

export const AppProviders = ({ children }) => {
    return <AuthProvider>{children}</AuthProvider>;
};
