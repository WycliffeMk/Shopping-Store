import React from 'react';
import { Navigate } from 'react-router-dom';

const withAuth = (WrappedComponent) => {
    return (props) => {
        // Check authentication status
        const isAuthenticated = localStorage.getItem('isLoggedIn') === 'true';

        return isAuthenticated ? <WrappedComponent {...props} /> : <Navigate to="/signin" />;
    };
};

export default withAuth;
