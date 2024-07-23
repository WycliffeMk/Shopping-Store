import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const { username, email, password, confirmPassword } = formData;
    const navigate = useNavigate();

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
        } else {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const userExists = users.some(user => user.email === email);
            if (userExists) {
                alert('User already exists');
            } else {
                users.push({ username, email, password });
                localStorage.setItem('users', JSON.stringify(users));
// <<<<<<< ayub
//                 alert('User registered successfully. Please log in.');
//                 navigate('/signin');  // Redirect to the login page
// =======
//                 alert('User registered successfully');
//                 navigate('/shop');  
// >>>>>>> main
            }
        }
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={onSubmit}>
                <input type="text" name="username" value={username} onChange={onChange} placeholder="Username" required />
                <input type="email" name="email" value={email} onChange={onChange} placeholder="Email" required />
                <input type="password" name="password" value={password} onChange={onChange} placeholder="Password" required />
                <input type="password" name="confirmPassword" value={confirmPassword} onChange={onChange} placeholder="Confirm Password" required />
                <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account? <a href="/signin">Login</a></p>
        </div>
    );
};

export default SignUp;
