import React from "react";
import "./card.styles.scss";
import { Button } from "react-bootstrap";
import { addItem } from "../../redux/cart/cart-action";
import { connect } from "react-redux";

const Cards = ({ item, addItem }) => {
  const addToCart = () => {
    addItem(item);
  };

  return (
    <div className="cards">
      <img src={item.imageUrl} className="items" alt="item" />
      <div className="card-details">
        <span className="card-title-price">
          <span className="card-title">{item.name}</span>
          <span className="card-price">&#8377; ${item.price}</span>
        </span>
        <section className="description">{item.description}</section>
        <Button
          className="add-button"
          variant="secondary"
          size="lg"
          onClick={addToCart}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

const mapDispatchToprops = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToprops)(Cards);
