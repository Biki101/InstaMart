import React from "react";
import "./nav-bar.scss";
import logo from "../../assets/logo.png";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Search } from "semantic-ui-react";
import CartIcon from "../cart-icon/cart-icon/cart-icon.component";
import { CgHomeAlt } from "react-icons/cg";
import { Link, useHistory } from "react-router-dom";

const NavBar = () => {
  const history = useHistory();

  const handleContactClick = () => {
    history.push("/contact");
  };

  const handleServicesClick = () => {
    history.push("/service");
  };

  const handleLogoClick = () => {
    history.push("/");
  };

  return (
    <div className="nav-bar">
      <div className="nav-description">
        <div className="section-1">
          <img
            src={logo}
            alt="logo"
            onClick={handleLogoClick}
            className="logo"
          />
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
        <Link to="/cart">
          <CartIcon className="cart-icon" />
        </Link>
      </div>
      <div className="nav-row">
        <CgHomeAlt
          style={{ fontSize: 40, marginLeft: 15 }}
          className="menu-icon"
          onClick={handleLogoClick}
        />
        <section className="info">
          <span className="services" onClick={handleServicesClick}>
            Services
          </span>
          <span className="contact" onClick={handleContactClick}>
            Contact
          </span>
        </section>
      </div>
    </div>
  );
};

export default NavBar;
