import React from "react";
import { Link } from "react-router-dom";
import "../components/Navigation.css";

const Navigation = (props) => {
  //declaration
  let drawerClass = `${props.sidebar}`;
  if (props.show) {
    drawerClass = `${props.sidebar} open`;
  }
  //if user is in homepage call link component
  if (props.sidebar === "Home") {
    return (
      <div className={drawerClass}>
        <Link to="/">Home</Link>
        <Link to="/portfolios">Projects</Link>
        <Link to="/about">About</Link>
      </div>
    );
  } else //if user is not in homepage create toggle button and a link
    return (
      <div className={drawerClass}>
        <button className="toggle_button" onClick={props.drawerToggle}>
          ●
        </button>
        <div className="links">
          <Link to="/" onClick={props.changeToggletoFalse}>
            Home
          </Link>
          <Link to="/portfolios" onClick={props.changeToggletoFalse}>Projects</Link>
          <Link to="/about" onClick={props.changeToggletoFalse}>About</Link>
        </div>
      </div>
    );
};

export default Navigation;
