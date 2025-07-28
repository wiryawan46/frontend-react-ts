import React, { createContext, useState, useEffect, ReactNode, useCallback } from 'react';
import Cookies from 'js-cookie';

// Define context value type
interface AuthContextType {
    isAuthenticated: boolean;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
    checkAuth: () => void;
}

// Create context with default value
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Define props type for AuthProvider
interface AuthProviderProps {
    children: ReactNode;
}

// Authentication provider component
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    // Function to check authentication status
    const checkAuth = useCallback(() => {
        const token = Cookies.get('token');
        console.log('Checking auth, token exists:', !!token);
        setIsAuthenticated(!!token);
        return !!token;
    }, []);

    // Initial check on mount
    useEffect(() => {
        checkAuth();
    }, [checkAuth]);

    // Listen for storage events (like from other tabs)
    useEffect(() => {
        const handleStorageChange = (e: StorageEvent) => {
            if (e.key === 'token' || !e.key) {
                checkAuth();
            }
        };

        window.addEventListener('storage', handleStorageChange);
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [checkAuth]);

    const value = {
        isAuthenticated,
        setIsAuthenticated,
        checkAuth
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};