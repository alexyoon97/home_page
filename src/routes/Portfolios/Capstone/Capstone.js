import React from "react";
import "./Capstone.css"
import Under_con from "../Capstone/img/underconstruction.png"

function Capstone() {
  return (
    <>
      <header className="header">Capstone Project</header>
      <div className="Capstone_container">
        <img src={Under_con}></img>
      </div>
    </>
  );
}

export default Capstone;
