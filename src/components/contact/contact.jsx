import React from "react";
import "./contact.scss";
import { Button, TextField } from "@material-ui/core";
import { RiCustomerService2Line } from "react-icons/ri";
import { TiMail } from "react-icons/ti";
import { WiTime7 } from "react-icons/wi";
import { MdPhoneInTalk } from "react-icons/md";

const Contact = () => {
  return (
    <div className="contact-page">
      <span className="title">CONTACT US</span>
      <div className="contact-container">
        <form className="form">
          <TextField id="name" label="Name" required variant="outlined" />
          <TextField
            id="number"
            label="Phone Number"
            required
            variant="outlined"
          />
          <TextField id="Subject" label="Subject" variant="outlined" />
          <TextField
            id="message"
            label="message"
            multiline
            rows={12}
            variant="outlined"
            required
          />
          <Button variant="contained" type="submit" className="submit-button">
            Submit
          </Button>
        </form>
        <div className="static-contact">
          <div className="time">
            <section className="icon">
              <RiCustomerService2Line style={{ fontSize: 50 }} />
            </section>
            <span className="support-duration">
              24/7 <br />
              <br />
              Support
            </span>
          </div>
          <div className="details">
            <div className="specific-details">
              <section className="icon">
                <WiTime7 style={{ fontSize: 50 }} />
              </section>
              <section className="detail">7am -7pm CST</section>
            </div>
            <div className="specific-details">
              <section className="icon">
                <TiMail style={{ fontSize: 50 }} />
              </section>
              <section className="detail">some@gmail.com</section>
            </div>
            <div className="specific-details">
              <section className="icon">
                <MdPhoneInTalk style={{ fontSize: 50 }} />
              </section>
              <section className="detail">1452367895</section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
