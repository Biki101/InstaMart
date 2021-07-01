import React from "react";
import "./landing-page.scss";
import service from "../../assets/service.png";
import { sections } from "../../data/10.1 directory.data.js";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="intro">
        <div className="title">
          <span className="name">ChapChap Store</span>
          <p className="objective">Free And Easy Delivery</p>
          <Button variant="outline-dark" className="start-button">
            <Link className="link" to="/directory">
              Start Shopping
            </Link>
          </Button>
        </div>
        <img src={service} alt="service" />
      </div>
      <div className="image-section">
        <img src={sections[0].imageUrl} alt="service" />
        <img src={sections[1].imageUrl} alt="service" />
        <img src={sections[2].imageUrl} alt="service" />
        <img src={sections[3].imageUrl} alt="service" />
      </div>
    </div>
  );
};

export default LandingPage;
