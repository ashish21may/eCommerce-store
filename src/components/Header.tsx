import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../style/Header.css';

export class Header extends Component  {

  render() {
    return (
      <div className="header">
        <h2 className="title">eCommerce Website </h2>
        <div className="nav-items">
          <Link to='/'>Home</Link>
          <span> | </span>
          <Link to='/myOrders'>My Orders</Link>
          <span> | </span>
          <Link to='/cart'>Cart</Link>
        </div>

      </div>
    )
  }
}

export default Header
