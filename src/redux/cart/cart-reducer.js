import { cartActionTypes } from "./cart-action-type";
import { addItemToCart, decreaseItemFromCart } from "./cart-utils";

const ININTIAL_STATE = {
  cartItems: [],
};

const cartReducer = (state = ININTIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case cartActionTypes.REMOVE_ITEMS:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case cartActionTypes.DECREACSE_ITEM:
      return {
        ...state,
        cartItems: decreaseItemFromCart(state.cartItems, action.payload),
      };
    case cartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartActionTypes: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
