import React, { Component } from 'react';
import { Products } from '../types/Product';

import { Link } from 'react-router-dom';

import '../style/ProductDetailPage.css';
import {addToCartAction} from "../redux/actions/action";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

interface ProductDetailProps{
  product: Products,
  location: any
  addToCartAction: (product: Products)=>void
}

export class ProductDetailPage extends Component <ProductDetailProps,{}> {
  handleAddToCart = (): void =>{
    this.props.addToCartAction(this.props.location.state.product);
  }
  render() {
    const { product } =  this.props.location.state;
    console.log('Product details props',this.props)
    return (
      <div className="product-container">
        <div className="product-image">
          <img src={product.img} alt={`${product.name} display area`} />
        </div>
        <div className="product-details">
          <div className="product-entries"> 
            <h2> Name: {product.name}</h2>
            <h4> Price: {product.price} </h4>
            <button onClick={this.handleAddToCart}> Add to Cart </button>
            <Link to='/cart'>
              <button onClick={this.handleAddToCart}> Buy Now </button>
            </Link>
          </div>
          <p className="product-description">
            {product.description}
          </p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({cart}) => {
  return {
    cart
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addToCartAction
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailPage);

