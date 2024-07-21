import React from 'react';
import { Navigate } from 'react-router-dom';

const withAuth = (WrappedComponent) => {
    return (props) => {
        // Check authentication status
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const isAuthenticated = users.length > 0; // Adjust this as needed based on your authentication logic

        return isAuthenticated ? <WrappedComponent {...props} /> : <Navigate to="/signin" />;
    };
};

export default withAuth;
