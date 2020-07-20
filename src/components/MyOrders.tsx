import React, { Component } from 'react';
import MyOrderItem from './MyOrderItem';

import '../style/MyOrder.css';
import { Products } from '../types/Product';

interface MyOrdersProps {
  products: Products[];
}

export class MyOrders extends Component <MyOrdersProps, {}> {
  render() {
    const  { products } = this.props;
    console.log('myorders products : ',products);
    return (
      <div className="my-cart">
        { products && products.map(item=><MyOrderItem key={item.id} product={item}/>)}        
      </div>
    )
  }
}

export default MyOrders
