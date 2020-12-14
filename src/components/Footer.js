import React from "react";
import "../components/Footer.css";
import c_sharp from "../components/logo/c_sharp.png";
import js from "../components/logo/js.png";
import mysql from "../components/logo/mysql.png";
import react from "../components/logo/react.png";

function Footer() {
  return (
    <div className="footer">
        <div className="intro">
          <h1>Alex Yoon</h1>
          <h2>Computer Eng. Degree <br></br>
          Passionate and inquisitive<br></br>
          English and Korean speaker<br></br>
          <img alt="" src={c_sharp}></img>
          <img alt="" src={js}></img>
          <img alt="" src={react}></img>
          <img alt="" src={mysql}></img>
          </h2>
        </div>
        <div className="contact">
          <div>
            <h1>Email</h1>
            <h2>wonsangalex@gmail.com</h2>
          </div>
          <div>
            <h1>Location</h1>
            <h2>Vacouver, BC</h2>
          </div>
          <div>
            <h1>Contact</h1>
            <h2>778.302.7412</h2>
          </div>
        </div>
      </div>
  );
}

export default Footer;
