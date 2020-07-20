export const ADD_TO_CART = "ADD_TO_CART";

export type CartAction = {
  type: String;
  payload: any; // for now Payload type is any becasue at times it can be string or object
}


export function addToCartAction({id, name, description, img, price, units}) {
  return {
    type: ADD_TO_CART,
    payload: {id, name, description, img, price, units}
  }
}