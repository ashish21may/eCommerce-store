import { Products } from "../../types/Product";
import { ADD_TO_CART, CartAction } from "../actions/action";

const initialState: Products[] = [
  {
    id: 1,
    name: "Book 1",
    description: "Description for Book 1",
    img:
      "http://images.amazon.com/images/P/0596004478.01._PE30_PI_SCMZZZZZZZ_.jpg",
    price: 100,
    units: 1,
    status: "delivered",
  },
];

export default function cartReducer(state = initialState, action: CartAction) {
  switch (action.type) {
    case ADD_TO_CART: {
      const product = action.payload;
      const cart = state;

      const existingProductIndex = cart.some((item) => item.id === product.id);

      const updatedCart = existingProductIndex
        ? Object.assign(
            [],
            cart.map((item) => {
              if (item.id === product.id) {
                item.units += 1;
              }
              return item;
            })
          )
        : [...cart, product];

      return updatedCart;
    }
  }

  return state;
}
