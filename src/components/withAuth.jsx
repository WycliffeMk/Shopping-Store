import React from 'react';
import { Navigate } from 'react-router-dom';

const withAuth = (WrappedComponent) => {
    return (props) => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const isAuthenticated = users.length > 0;

        return isAuthenticated ? <WrappedComponent {...props} /> : <Navigate to="/signin" />;
    };
};

export default withAuth;
