import React, { useState, useEffect } from 'react';

console.log('auth-store.jsx module loading');

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => {},
    logOut: () => {}
});

export const AuthContextProvider = (props) => {
    console.log('*** AuthContextProvider component is MOUNTING ***');
    const [token, setToken] = useState(() => localStorage.getItem('token'));
    
    console.log('AuthContextProvider rendering with token from localStorage:', localStorage.getItem('token'));

    const loginHandler = (token) => {
        console.log('loginHandler called with token:', token);
        setToken(token);
        localStorage.setItem('token', token);
        console.log('Token saved to localStorage:', localStorage.getItem('token'));
    };

    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('expiryTime');
    };

    useEffect(() => {
        const expiryTime = localStorage.getItem('expiryTime');

        if (!expiryTime) {
            return;
        }

        const remainingTime = +expiryTime - Date.now();

        if (remainingTime <= 0) {
            logoutHandler();
            return;
        }

        const timer = setTimeout(logoutHandler, remainingTime);

        return () => {
            clearTimeout(timer);
        };
    }, [token]);

    const contextValue = {
        token,
        isLoggedIn: !!token,
        login: loginHandler,
        logOut: logoutHandler
    };

    console.log('Auth context updated - token:', token, 'isLoggedIn:', !!token);

    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>;
};

export default AuthContext;