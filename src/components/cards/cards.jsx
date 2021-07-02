import React from "react";
import "./card.styles.scss";
import { Button } from "react-bootstrap";

const Cards = ({ item }) => {
  return (
    <div className="cards">
      <img src={item.imageUrl} className="items" alt="item" />
      <div className="card-details">
        <span className="card-title-price">
          <span className="card-title">{item.name}</span>
          <span className="card-price">&#8377; ${item.price}</span>
        </span>
        <section className="description">{item.description}</section>
        <Button className="add-button" variant="secondary" size="lg">
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default Cards;
