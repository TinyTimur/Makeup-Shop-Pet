import RegComponent from '../Modules/Components/RegComponent/RegComponent.jsx';
import AuthComponent from '../Modules/Components/AuthComponent/AuthComponent.jsx';
import { useState } from 'react';

export default function AuthRegPage() {
    const [isRegistered, setIsRegistered] = useState(false);
    return (
        <>
            {isRegistered ? (
                <AuthComponent
                    setIsRegistered={setIsRegistered}
                    isRegistered={isRegistered}
                />
            ) : (
                <RegComponent
                    setIsRegistered={setIsRegistered}
                    isRegistered={isRegistered}
                />
            )}
        </>
    );
}
