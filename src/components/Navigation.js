import React from "react";
import { Link } from "react-router-dom";
import "../components/Navigation.css";

const Navigation = (props) => {
  let drawerClasses = `${props.props}`;
  if (props.show) {
    drawerClasses = `${props.props} open`;
  }
  if (props.props === "Home") {
    return (
      <div className={drawerClasses}>
        <Link to="/">Home</Link>
        <Link to="/portfolios">Projects</Link>
        <Link to="/about">About</Link>
      </div>
    );
  } else
    return (
      <div className={drawerClasses}>
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
