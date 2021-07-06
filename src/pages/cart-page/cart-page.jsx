import React from "react";
import { connect } from "react-redux";
import ShopIcon from "@material-ui/core/Icon";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart-selector";
import { createStructuredSelector } from "reselect";
import "./cart-page.styles.scss";
import CheckOutItems from "../../components/checkout-items/checkout-items";
import { Button } from "react-bootstrap";

const CartPage = ({ cartItems, cartTotal }) => {
  return (
    <div className="cart-page">
      <span className="title">Cart</span>
      <div className="cart-items-details">
        <div className="checkout-header">
          <div className="header-block">
            <span>Product</span>
          </div>
          <div className="header-block">
            <span>Details</span>
          </div>
          <div className="header-block">
            <span>Quantity</span>
          </div>
          <div className="header-block">
            <span>Price</span>
          </div>
          <div className="header-block">
            <span>Remove</span>
          </div>
        </div>
        {cartItems.map((cartItem, index) => (
          <CheckOutItems key={index} cartItem={cartItem} />
        ))}
      </div>
      <div className="cart-total">
        <div className="total">TOTAL: &#8377; {cartTotal}</div>
        <Button variant="dark">Check Out</Button>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(CartPage);
