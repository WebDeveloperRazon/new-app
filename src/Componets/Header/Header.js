import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Header = (props) => {
    return (
        <div className="header-nav">
            
           <div>
            <a href="/home" ><img src={logo} alt="" /></a>
           </div>
           <div className="topnav">
            <a href="/shop">Shop</a>
            <a href="/order">Review Order</a>
            <a href="/inventory">Manage Inventory</a>
          
           </div>
         <div className="cart-icon">
           
         <FontAwesomeIcon icon={faShoppingCart}  />
         </div>
        </div>
    );
};

export default Header;