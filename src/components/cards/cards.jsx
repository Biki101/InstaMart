import React from "react";
import { Button } from "react-bootstrap";

const Cards = ({ item }) => {
  return (
    <div className="cards">
      <img src={item.imageUrl} alt="item" />
      <span className="card-title-price">
        <span className="card-title">{item.name}</span>
        <span className="card-price">{item.price}</span>
      </span>
      <section className="description">{item.description}</section>
      <Button variant="outline-dark">Add to Cart</Button>
    </div>
  );
};

export default Cards;
