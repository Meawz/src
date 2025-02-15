import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginMessage, setLoginMessage] = useState('');

    const handleLogin = () => {
        
        if (username && password) {

            setLoginMessage('Welcome, Chris!');
        } else {
            setLoginMessage('Invalid credentials.Please fill in both fields.');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form>
                <label>
                    Username:
                    <input
                        type = "text"
                        value = {username}
                        onChange = {(e) => setUsername(e.target.value)}
                    />    
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type = "password"
                        value = {password}
                        onChange = {(e) => setPassword(e.target.value)}
                    />    
                </label>
                <br />
                <button type = "button" onClick = {handleLogin}>
                    Login
                </button>
            </form>
            {loginMessage && <p>{loginMessage}</p>}
        </div>
    );
};

export default Login;