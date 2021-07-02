import React from "react";
import "./directory.styles.scss";
import SHOP_DATA from "../../data/16.2 shop.data.js";
import Cards from "../cards/cards";
import Nav from "react-bootstrap/Nav";
import { useState } from "react";
import { Container } from "react-bootstrap";
const Directory = () => {
  const [currentDirectory, setCurrentDirectory] = useState("hats");
  const handleClickHats = () => {
    setCurrentDirectory("hats");
  };
  const handleClickSneakers = () => {
    setCurrentDirectory("sneakers");
  };
  const handleClickJackets = () => {
    setCurrentDirectory("jackets");
  };
  const handleClickWomens = () => {
    setCurrentDirectory("womens");
  };
  const handleClickMens = () => {
    setCurrentDirectory("mens");
  };

  return (
    <div className="directory">
      <Container className="directory-nav">
        <Nav fill variant="tabs">
          <Nav.Item>
            <Nav.Link className="link" onClick={handleClickHats}>
              Hats
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="link" onClick={handleClickSneakers}>
              Sneakers
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="link" onClick={handleClickJackets}>
              Jackets
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="link" onClick={handleClickWomens}>
              Womens
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="link" onClick={handleClickMens}>
              Mens
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>

      <div className="cards-container">
        {SHOP_DATA.filter(
          (category) => currentDirectory === category.routeName
        ).map((details) =>
          details.items.map((item) => <Cards key={item.id} item={item} />)
        )}
      </div>
    </div>
  );
};

export default Directory;
