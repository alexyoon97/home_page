import React from "react";
import { Link } from "react-router-dom";
import "../components/Navigation.css";

const Navigation = (props) => {
  let drawerClass = `${props.sidebar}`;
  if (props.show) {
    drawerClass = `${props.sidebar} open`;
  }
  if (props.sidebar === "Home") {
    return (
      <div className={drawerClass}>
        <Link to="/">Home</Link>
        <Link to="/portfolios">Projects</Link>
        <Link to="/about">About</Link>
      </div>
    );
  } else
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
