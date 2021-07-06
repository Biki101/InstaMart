import { createSelector } from "reselect";

const selectCart = (state) => state.cart; // input selector

export const selectCartItems = createSelector(
  // memoi selector it uses input selector and createStore
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

export const selectCartVisibility = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (total, cartItem) => (total = total + cartItem.quantity * cartItem.price),
    0
  )
);
