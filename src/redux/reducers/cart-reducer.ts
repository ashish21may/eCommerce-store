import { Products } from "../../types/Product";
import { ADD_TO_CART, CartAction } from "../actions/action";

const initialState: Products[] = [];

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
