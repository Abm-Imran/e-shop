import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/icon.png'
import './Header.css'
const Header = () => {
    return (
        <nav className='header'>
            <Link to='/home' > <img src={Logo} alt="" /> </Link>
            <div className="nav-item">
                <Link to={'/'} >Home</Link>
                <Link to={'/shop'} >Shop</Link>
                <Link to={'/order-review'}>Order Review</Link>
                <Link to={'/inventory'}>Inventory</Link>

            </div>
        </nav>
    );
};

export default Header;