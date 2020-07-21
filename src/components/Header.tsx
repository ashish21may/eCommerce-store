import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "../style/Header.css";
import { Products } from "../types/Product";

interface HeaderProps {
  cart: Products[];
}
export class Header extends Component<HeaderProps, {}> {

  render() {
    const { cart } = this.props;
    let cartCounter = 0;

    cart &&
      cart.forEach((item) => {
        cartCounter += item.units;
      });
    return (
      <div className="header">
        <h2 className="title">eCommerce Website </h2>
        <div className="nav-items">
          <Link to="/">Home</Link>
          <span> | </span>
          <Link to="/myOrders">My Orders</Link>
          <span> | </span>
          <Link to="/cart">
            Cart{" "}
            {cartCounter > 0 ? (
              <span className="cart-counter">{cartCounter}</span>
            ) : null}
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ cart }) => {
  return {
    cart,
  };
};

export default connect(mapStateToProps)(Header);
