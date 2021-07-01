import React from "react";
import { Route, Switch } from "react-router-dom";
import Menu from "../components/menu-component/menu";
import Contact from "../components/contact/contact";
import Services from "../components/services/services";
import Directory from "../components/directory/directory";

const Routes = ({ match }) => {
  console.log = match;

  return (
    <Switch>
      <Route exact path="/service" component={Services} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/menu" component={Menu} />
      <Route path="/directory" component={Directory} />
    </Switch>
  );
};

export default Routes;
