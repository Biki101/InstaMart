import React from "react";
import "./landing-page.scss";
import service from "../../assets/service.png";
import hood from "../../assets/hood.png";
import jacket from "../../assets/jackets.png";
import jeans from "../../assets/jeans.png";
import sneakers from "../../assets/sneakers.png";
import { Button } from "react-bootstrap";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="intro">
        <div className="title">
          <span className="name">ChapChap Store</span>
          <p className="objective">Free And Easy Delivery</p>
          <Button variant="outline-dark" className="start-button">
            Start Shopping
          </Button>
        </div>
        <img src={service} alt="service" />
      </div>
      <div className="image-section">
        <img src={hood} alt="service" />
        <img src={jacket} alt="service" />
        <img src={jeans} alt="service" />
        <img src={sneakers} alt="service" />
      </div>
    </div>
  );
};

export default LandingPage;
