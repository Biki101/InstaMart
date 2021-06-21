import React from "react";
import "./nav-bar.scss";
import logo from "../../assets/logo.png";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Search } from "semantic-ui-react";
import CartIcon from "../cart-icon/cart-icon/cart-icon.component";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-description">
        <div className="section-1">
          <img src={logo} alt="logo" className="logo" />
          <div className="range">
            <HiOutlineLocationMarker
              style={{ fontSize: 20, color: "white", alignSelf: "center" }}
            />
            <div className="range-des">
              Delivery inside <b>Bhaktapur</b>
            </div>
          </div>
        </div>
        <div className="section-2">
          <Search className="search-bar" size="huge" />
          {/* <Grid>
            <Grid.Column width={6}>
              <Search
              //loading="true"
              //onResultSelect={}
              //onSearchChange={handleSearchChange}
              //results={results}
              //value={value}
              />
            </Grid.Column>

            <Grid.Column width={10}>
              <Segment>
                <Header>State</Header>
                <pre style={{ overflowX: "auto" }}>
                  {JSON.stringify({ loading, results, value }, null, 2)}
                </pre>
                <Header>Options</Header>
                <pre style={{ overflowX: "auto" }}>
                  {JSON.stringify(source, null, 2)}
                </pre>
              </Segment>
            </Grid.Column>
          </Grid> */}
        </div>
        <CartIcon className="cart-icon" />
      </div>
      <div className="nav-row">
        <GiHamburgerMenu
          style={{ fontSize: 40, marginLeft: 15 }}
          className="menu-icon"
        />
        <section className="info">
          <span className="services">Services</span>
          <span className="contact">Contact</span>
        </section>
      </div>
    </div>
  );
};

export default NavBar;
