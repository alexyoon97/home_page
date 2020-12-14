import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Portfoilo from "./routes/Portfolio_page";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Capstone from "./routes/Portfolios/Capstone/Capstone";
import ay_logo from "../src/components/logo/ay_logo.png";
import "./App.css";

class App extends Component {
  constructor(props){
    super(props)
      this.state = {
        sideDrawerOpen: false,
      };
      this.drawerToggleClickHandler = this.drawerToggleClickHandler.bind(this);
      this.changeToggletoFalseHandler = this.changeToggletoFalseHandler.bind(this);
  }
  
  drawerToggleClickHandler(){
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  changeToggletoFalseHandler(){
    setTimeout(() => {
      this.setState({ sideDrawerOpen: false });
    }, 1);
  };
  render() {
    return (
      <HashRouter>
        <Route path="/" exact={true} component={Home} />
        <Route path="/about">
          <Navigation //composition function
            sidebar="side" //class name
            drawerToggle={this.drawerToggleClickHandler} //function block
            show={this.state.sideDrawerOpen}//state value
            changeToggletoFalse={this.changeToggletoFalseHandler}//function block
          />
          <About />
          <Footer />
        </Route>
        <Route path="/portfolios" exact={true}>
          <Navigation
            sidebar="side"
            drawerToggle={this.drawerToggleClickHandler}
            show={this.state.sideDrawerOpen}
            changeToggletoFalse={this.changeToggletoFalseHandler}
          />
          <Portfoilo />
          <Footer />
        </Route>
        <Route path="/portfolios/:name">
          <Navigation
            sidebar="side"
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
