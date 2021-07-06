import React from "react";
import { CgShoppingCart } from "react-icons/cg";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItemsCount } from "../../../redux/cart/cart-selector";

import "./cart-icon.style.scss";

const CartIcon = ({ itemCount }) => (
  <div className="cart-icon">
    <CgShoppingCart style={{ fontSize: 50 }} />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(CartIcon);
