import React, { Component } from "react";
import Book from "./Book";

import "../style/HomePage.css";
import { Products } from "../types/Product";

interface HomePageProps {
  products: Products[];
}

export class HomePage extends Component<HomePageProps, {}> {
  // constructor(props: HomePageProps) {
  //   super(props);
    // this.state = {
    //   users: [] // we can set the users data received in fetch call below.
    // };
  // }

  componentDidMount() {
    // Below API to get a list of books is not working,
    // so I am just using another API to demonstrate that we can get get Data like this nad set that into
    // our state variable in  did mount lifeCycle.

    // <https://api.myjson.com/bins/j82l2> 
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(response => console.log('Response : ', response));
  }

  render() {
    const { products } = this.props;
    return (
      <div className="home-page">
        {products &&
          products.map((product) => (
            <Book
              key={product.id}
              product={product}
            />
          ))}
      </div>
    );
  }
}

export default HomePage;
