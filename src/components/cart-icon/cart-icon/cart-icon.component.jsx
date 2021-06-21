import React from "react";
import { CgShoppingCart } from "react-icons/cg";

import "./cart-icon.style.scss";

const CartIcon = () => (
  <div className="cart-icon">
    <CgShoppingCart style={{ fontSize: 50 }} />
    <span className="item-count">4</span>
  </div>
);

export default CartIcon;
