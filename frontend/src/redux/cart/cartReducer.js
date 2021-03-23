import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "./cartTypes";
import { addItemToCart } from "./cartUtils";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};
