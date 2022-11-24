import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/icon.png'
import './Header.css'
const Header = () => {
    return (
        <nav>
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            <div className="nav-item">
                <Link to={'/'} >Home</Link>
                <Link to={'/shop'} >Shop</Link>
                <Link to={'/orderreview'}>Order Review</Link>
                <Link to={'/inventory'}>Inventory</Link>

            </div>
        </nav>
    );
};

export default Header;