import React, { Component } from 'react';
import '../style/Book.css';
import { Products } from '../types/Product';
import { Link } from 'react-router-dom';

interface BookProps{
  product: Products;
}
export class Book extends Component <BookProps,{}>{

  render() {
    const { product } = this.props;
    return (
      <div className="book">
        <div className="book-image">
          <img src={product.img} alt="Alternate text" style={{width:'inherit', height:'inherit'}}/>
        </div>
        <div className="book-details">
          <div> {product.name} </div>
          <div> {product.description} </div>
          <Link to={{pathname: `/${product.id}`, state: {product}}}>
            <button className="buy-book-button" > Check and Buy </button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Book;
