import React from "react";
import "./Capstone.css"
import Under_con from "../Capstone/img/underconstruction.png"
import Cap_1 from "../Capstone/img/capstone_project1.gif"
import Cap_2 from "../Capstone/img/capstone_project2.gif"


function Capstone() {
  return (
    <>
      <header className="header">Capstone Project</header>
      <div className="Capstone_container">
        <div className="capstone_text">
        In my capstone project, I choose to make a programmed robot vacuum 
        because I was always interested in inventing and create the machine, 
        so I and my partner Sam both agreed to develop a robot vacuum.<br></br><br></br>

        The robot vacuum is running on Microbard supplied from NAIT(Northern Alberta Institute of Technology) 
        and it has two main motors for the wheels and one fan to pick up target objects and 
        one Ultrasound chip order to check the distance and avoid a collision. 
        We designed the machine with assembly language for operating motors, a fan, and an ultrasound.<br></br><br></br>
        We implement a simple User interface to give more control to users. 
        There are four buttons and the system will not start until the user press the button, 
        also the system will inform the user how far the object that detected in centimeter on the display.
        </div>
        <div>
          <img src={Cap_1}></img>
          <p style={{fontStyle: "italic", color: "white", fontSize:"1.4vh"}}>Figure 1</p>
          <div className="capstone_text">
            Figure 1, it's showing a programmed robot vacuum is working sucessfully with no errors, 
            picking an object and send it to the object collect bag and moving forward
          </div>
        </div>
        <div>
          <img src={Cap_2}></img>
          <p style={{fontStyle: "italic", color: "white", fontSize:"1.4vh"}}>Figure 2</p>
          <div className="capstone_text">
            In figure 2 we can check the ultrasound chip is working his job great, 
            it shoots pulse and receives returned pulse and we can calculate the distance between the machine and 
            objects. This way we are able to avoid collision with walls, obstacles, etc. 
          </div>

          <div className="capstone_text">
            Thank you for reading my quick review of my Capstone project, if you are intreseted reading more about
            my Capstone project you can also check out from link below.
          </div>
        </div>

        <a style={{margin:"5vh"}} href="https://drive.google.com/file/d/1wrqfTpZOJJPCCQ0Tt5nZ3v1rLzP2rjVg/view?usp=sharing" target="_blank">Click here to view full Google Docs</a>
      </div>
    </>
  );
}

export default Capstone;
