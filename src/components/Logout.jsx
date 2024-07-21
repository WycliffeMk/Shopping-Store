import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({ onLogout }) => {
    const navigate = useNavigate();

    useEffect(() => {
        // Perform logout actions
        onLogout();
        navigate('/signin');
    }, [navigate, onLogout]);

    return (
        <div>
            Logging out...
        </div>
    );
};

export default Logout;
