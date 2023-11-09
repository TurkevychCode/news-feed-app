// src/Login.js
import React, {useState} from 'react';

const Login = ({onLogin}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const hardcodedUsername = '1111';
    const hardcodedPassword = '1111';

    const handleLogin = () => {
        if (username === hardcodedUsername && password === hardcodedPassword) {
            onLogin(username);
        } else {
            alert('Невірне ім\'я користувача або пароль');
        }
    };

    return (
        <form className='loginForm'>
            <div className='loginForm-block'>
                <h2 className='loginForm-block-title'>News feed</h2>
                <div className='loginForm-block-inputs'>
                    <label className='loginForm-block-inputs-label'>Username</label>
                    <input className='loginForm-block-inputs-input' type="text" autoComplete="username" value={username}
                           placeholder='email' onChange={(e) => setUsername(e.target.value)}/>
                    <label className='loginForm-block-inputs-label'>Password</label>
                    <input className='loginForm-block-inputs-input' type="password" autoComplete={'current-password'}
                           placeholder='password' value={password}
                           onChange={(e) => setPassword(e.target.value)}/>
                    <button className='loginForm-block-inputs-button' onClick={handleLogin}>Login</button>
                </div>
            </div>
        </form>
    );
};

export default Login;
