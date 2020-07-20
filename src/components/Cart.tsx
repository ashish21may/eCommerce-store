import React, { Component } from "react";
import "../style/Cart.css";
import { CartType } from "../types/Cart";

interface CartProps {
  cart: CartType[];
}

interface CartState {
  cartTotal: Number;
  itemPrice: Number;
  tax: Number;
  deliveryCharge: Number;
}

export class Cart extends Component<CartProps, CartState> {
  constructor(props: any) {
    super(props);
    this.state = {
      cartTotal: 0,
      itemPrice: 0,
      tax: 0,
      deliveryCharge: 0,
    };
  }

  componentDidMount() {
    const { cart } = this.props;
    let itemPrice = 0;

    cart &&
      cart.forEach((item) => {
        console.log("Item price: ", item.price);
        itemPrice += item.price;
      });
    const tax = (10 / 100) * itemPrice;
    // If itemPrice is greater than 100 then 0 delivery fee.
    const deliveryCharge = itemPrice < 100 ? 5 : 0;
    const cartTotal = itemPrice + tax + deliveryCharge;

    this.setState({
      cartTotal,
      itemPrice,
      tax,
      deliveryCharge,
    });
  }

  render() {
    const { cart } = this.props;
    const { cartTotal, itemPrice, tax, deliveryCharge } = this.state;

    return (
      <div className="cart">
        <div className="shipping-address">
          <form className="address-form">
            <input type="text" value="" placeholder="Name" />
            <input type="text" value="" placeholder="Address, like street .." />
            <input type="text" value="" placeholder="City" />
            <input type="number" value="" placeholder="pincode" />
            <div className="address-form-button">
              <button> Save Address </button>
              <button> Edit Address </button>
            </div>
          </form>
        </div>
        <div className="shopping-bag">
          <h2> Item Details </h2>
          <div className="cart-container">
          <div className="cart-item-total">
              <span>Item Name</span>
              <span>Quantity</span>
          </div>
          <div
              style={{
                height: "0px",
                border: "1px solid black",
                width: "100%",
              }}
            />
          {cart &&
            cart.map((item, index) => (
              <div key={index} className="cart-item-total">
                <span>{item.name}</span>
                <span>{item.units}</span>
              </div>
            ))}
          </div>
          <h2> Payment Info </h2>
          <div className="cart-container">
            <div className="cart-item-total">
              <span>Item Price</span>
              <span>${itemPrice}</span>
            </div>
            <div className="cart-item-total">
              <span>Tax</span>
              <span>${tax}</span>
            </div>
            <div className="cart-item-total">
              <span>Shipping Charge</span>
              <span>${deliveryCharge}</span>
            </div>
            <div
              style={{
                height: "0px",
                border: "1px solid black",
                width: "100%",
              }}
            />
            <div className="cart-item-total">
              <span>Total</span>
              <span>${cartTotal}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
