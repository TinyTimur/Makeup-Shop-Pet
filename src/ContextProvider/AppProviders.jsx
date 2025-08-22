import { AuthProvider } from '../Context/AuthProvider.jsx';
import { CartProvider } from '../Context/CartProvider.jsx';

export const AppProviders = ({ children }) => {
    return (
        <AuthProvider>
            <CartProvider>{children}</CartProvider>
        </AuthProvider>
    );
};

// Враппим контексты разные в один AppProviders шаг 3
