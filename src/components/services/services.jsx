import React from "react";
import { CgShoppingBag } from "react-icons/cg";
import { GiTreasureMap } from "react-icons/gi";
import { FaShuttleVan, FaRupeeSign } from "react-icons/fa";
import "./services.scss";

const Services = () => {
  return (
    <div className="services-page-component">
      <div className="services-row">
        <div className="detail-container">
          <GiTreasureMap style={{ fontSize: 70 }} className="icon" />
          <div className="detail">All Over Bhaktapur</div>
        </div>
        <div className="detail-container">
          <CgShoppingBag style={{ fontSize: 50 }} className="icon" />
          <div className="detail">Sneakers</div>
        </div>
      </div>
      <div className="services-row">
        <div className="detail-container">
          <FaRupeeSign style={{ fontSize: 50 }} className="icon" />
          <div className="detail">Free Delivery</div>
        </div>
        <div className="detail-container">
          <FaShuttleVan style={{ fontSize: 50 }} className="icon" />
          <div className="detail">Fast Delivery</div>
        </div>
      </div>
    </div>
  );
};

export default Services;
