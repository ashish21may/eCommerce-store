import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from './components/HomePage';
import Header from './components/Header';
import  MyOrders from './components/MyOrders';
import './App.css';
import { Products } from './types/Product';
import ProductDetailPage from './components/ProductDetailPage';
import Cart from './components/Cart';

export const productDetails: Products[] = [

  {
    id: 1,
    name: "Book 1",
    description: "Description for Book 1",
    img: "http://images.amazon.com/images/P/0596004478.01._PE30_PI_SCMZZZZZZZ_.jpg",
    price: 100,
    units:1,
    status: 'delivered'
  },

  {
    id: 2,
    name: "Book 2",
    description: "Description for Book 2",
    img: "http://images.amazon.com/images/P/0596004478.01._PE30_PI_SCMZZZZZZZ_.jpg",
    price: 100,
    units:1,
    status: 'delivered'
  },


  {
    id: 3,
    name: "Book 3",
    description: "Description for Book 3",
    img: "http://images.amazon.com/images/P/0596004478.01._PE30_PI_SCMZZZZZZZ_.jpg",
    price: 100,
    units: 1,
    status: 'delivered'
  },

  {
    id: 4,
    name: "Book 4",
    description: "Description for Book 4",
    img: "http://images.amazon.com/images/P/0596004478.01._PE30_PI_SCMZZZZZZZ_.jpg",
    price: 100,
    units: 1,
    status: 'delivered'
  },


  {
    id: 5,
    name: "Book 5",
    description: "Description for Book 5",
    img: "http://images.amazon.com/images/P/0596004478.01._PE30_PI_SCMZZZZZZZ_.jpg",
    price: 100,
    units: 1,
    status: 'delivered'
  }
];

interface AppProps {
  cart: Products[]
}
interface AppState {
  products: Products[]
}

class App extends Component <AppProps, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      products : []
    }
  }

  componentDidMount(){
    this.setState({
      products: productDetails
    })
  }
  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path='/' render={match=>(
              <HomePage products={this.state.products}/>
              )}>
            </Route>
            <Route exact path='/myOrders' render={match=>(
              <MyOrders products={this.state.products} />
            )}></Route>
            <Route exact path='/cart' render={match =>(
              <Cart cart={this.props.cart} />
            )}></Route>
            <Route exact path='/:id' component={ProductDetailPage}></Route>

          </Switch>
          
        </BrowserRouter>
      </div>
    );
  }

}

const mapStateToProps = ({cart}) => {
  return {
    cart
  }
}

export default connect(mapStateToProps)(App);
