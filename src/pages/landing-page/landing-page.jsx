import React from "react";
import "./landing-page.scss";
import service from "../../assets/service.png";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="intro">
        <div className="title">
          <span className="name">ChapChap Store</span>
          <p className="objective">Free And Easy Delivery</p>
        </div>
        <img src={service} alt="service" />
      </div>
      <div className="image-section">
        <img src={service} alt="service" />
        <img src={service} alt="service" />
        <img src={service} alt="service" />
        <img src={service} alt="service" />
      </div>
    </div>
  );
};

export default LandingPage;
