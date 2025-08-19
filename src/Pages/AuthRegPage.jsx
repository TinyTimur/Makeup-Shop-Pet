import RegComponent from '../Modules/Components/RegComponent/RegComponent.jsx';
import AuthComponent from '../Modules/Components/AuthComponent/AuthComponent.jsx';
import { useState } from 'react';

export default function AuthRegPage() {
    const [isRegistered, setIsRegistered] = useState(true);
    return (
        <>
            {isRegistered ? <AuthComponent /> : <RegComponent />}
            <button
                onClick={() => {
                    setIsRegistered(!isRegistered);
                }}
            >
                Press me
            </button>
        </>
    );
}
