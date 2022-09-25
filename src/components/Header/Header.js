import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <img src={logo} alt="Logo" />
                <div>
                    <a href="/order">Order</a>
                    <a href="/review">Review</a>
                    <a href="/manage">Manage</a>
                    <a href="/login">Login</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;