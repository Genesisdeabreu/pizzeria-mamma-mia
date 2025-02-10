import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setMessage('Todos los campos son obligatorios.');
            return;
        }
        if (password.length < 6) {
            setMessage('La contraseña debe tener al menos 6 caracteres.');
            return;
        }
        setMessage('Login exitoso.');
    };

    return (
        <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
                <label>Email:</label>
                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="form-group">
                <label>Contraseña:</label>
                <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
            {message && <p className="alert alert-warning">{message}</p>}
        </form>
    );
};

export default Login;
