import { Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/footer";
import Menu from "./components/menu-component/menu";
import Contact from "./components/contact/contact";
import Services from "./components/services/services";
import NavBar from "./components/nav-bar/nav-bar";
import LandingPage from "./pages/landing-page/landing-page";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/service" component={Services} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/menu" component={Menu} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
