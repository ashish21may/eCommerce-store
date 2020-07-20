import React, { Component } from 'react';
import { Products } from '../types/Product';

import '../style/MyOrder.css';

interface MyOrderItemProps {
  product: Products
}

export class MyOrderItem extends Component <MyOrderItemProps, {}>{
  render() {
    const { product } = this.props;
    console.log('Cart Item product: ',this.props);
    const date = (new Date()).toLocaleDateString();

    return (
      <div className='cart-item'>
        <div className='cart-header'>
          <h2 className="cart-left-title">Order placed on : {date} </h2>
          <div className="cart-right-title">
            Status: {product.status}
          </div>
        </div>
        <div className='cart-item-body'>
          <div className="cart-item-image">
            <img src={product.img} alt={`${product.name} display area`} />
          </div>
          <div className="cart-item-description">
            <h3> Name: {product.name}</h3>
            <h3> Price: {product.price} </h3>
          </div>
        </div>
      </div>
    )
  }
}

export default MyOrderItem
