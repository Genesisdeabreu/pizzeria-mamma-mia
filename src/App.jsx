import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    const handleLoginClick = () => {
        setShowLogin(true);
        setShowRegister(false);
    };

    const handleRegisterClick = () => {
        setShowRegister(true);
        setShowLogin(false);
    };

    return (
        <>
            <Navbar onLoginClick={handleLoginClick} onRegisterClick={handleRegisterClick} />
            {showLogin && <Login />}
            {showRegister && <Register />}
            <Home />
            <Footer />
        </>
    );
};

export default App;