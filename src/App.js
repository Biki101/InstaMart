import { Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/footer";
import NavBar from "./components/nav-bar/nav-bar";
import LandingPage from "./pages/landing-page/landing-page";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
