import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = props => {
  return ( <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <span className="navbar-brand">Shop App</span>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" to="/menu">Menu</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/cart">Shopping Cart</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/admin">Admin</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About Us</NavLink>
        </li>
      </ul>
      <span className="nav-item badge badge-primary m-2"><i className="fas fa-shopping-cart"></i> {props.productsCount}</span>
      <span>
      <NavLink className="nav-link" to="/login">Login</NavLink>
      </span>
    </div>  
   
  </div>
</nav> );
}
 
export default Header;
