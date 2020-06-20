import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Portfoilo from "./routes/Portfolio_page";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Capstone from "./routes/Portfolios/Capstone/Capstone";
import "./App.css";

class App extends Component {
  state = {
    sideDrawerOpen: false,
  };
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  changeToggletoFalseHandler = () => {
    setTimeout(() => {
      this.setState({ sideDrawerOpen: false });
    }, 1);
  };
  render() {
    return (
      <HashRouter>
        <Route path="/" exact={true} component={Home} />
        <Route path="/about">
          <Navigation
            props="top"
            drawerToggle={this.drawerToggleClickHandler}
            show={this.state.sideDrawerOpen}
            changeToggletoFalse={this.changeToggletoFalseHandler}
          />
          <About />
          <Footer />
        </Route>
        <Route path="/portfolios" exact={true}>
          <Navigation
            props="top"
            drawerToggle={this.drawerToggleClickHandler}
            show={this.state.sideDrawerOpen}
            changeToggletoFalse={this.changeToggletoFalseHandler}
          />
          <Portfoilo />
          <Footer />
        </Route>
        <Route path="/portfolios/:name">
          <Navigation
            props="top"
            drawerToggle={this.drawerToggleClickHandler}
            show={this.state.sideDrawerOpen}
            changeToggletoFalse={this.changeToggletoFalseHandler}
          />
          <Capstone />
          <Footer />
        </Route>
      </HashRouter>
    );
  }
}

export default App;
