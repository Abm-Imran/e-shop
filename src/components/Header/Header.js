import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../images/icon.png'
import './Header.css'
const Header = () => {
    return (
        <nav className='header'>
            <Link to='/home' > <img src={Logo} alt="" /> </Link>
            <div className="nav-item">
                <NavLink to={'/'} >Home</NavLink>
                <NavLink to={'/shop'} >Shop</NavLink>
                <NavLink to={'/order-review'}>Order Review</NavLink>
                <NavLink to={'/inventory'}>Inventory</NavLink>

            </div>
        </nav>
    );
};

export default Header;