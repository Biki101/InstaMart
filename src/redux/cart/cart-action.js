import { cartActionTypes } from "./cart-action-type";

export const addItem = (item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: cartActionTypes.REMOVE_ITEMS,
  payload: item,
});

export const decreaseItem = (item) => ({
  type: cartActionTypes.DECREACSE_ITEM,
  payload: item,
});

export const emptyCart = () => ({
  type: cartActionTypes.CLEAR_CART,
});
