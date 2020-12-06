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
        because I was always interested in inventing and turn idea into a product, 
        so I and my partner Sam both agreed to build a robot vacuum.<br></br><br></br>

        The robot vacuum is running on Microbard supplied from NAIT(Northern Alberta Institute of Technology) 
        and it has two main motors for the wheels, one fan to pick up target objects, and 
        one Ultrasound chip in order to measure the distance in between the machine and the obstacle to avoid collision. 
        We designed the machine with assembly language to operate the motors, fan, and an ultrasound.<br></br><br></br>
        We implement a simple User interface to give more access to user. 
        There are four buttons and the system will wait for button press, 
        also the system will inform distance information on the display.
        </div>
        <div>
          <img src={Cap_1}></img>
          <p style={{fontStyle: "italic", color: "white", fontSize:"1.4vh"}}>Figure 1</p>
          <div className="capstone_text" style={{padding:"8vh"}}>
            In Figure 1, it's showing a programmed robot vacuum is working sucessfully moving forward with no errors, and
            pick up an object and collect it to the bag.
          </div>
        </div>
        <div>
          <img src={Cap_2}></img>
          <p style={{fontStyle: "italic", color: "white", fontSize:"1.4vh"}}>Figure 2</p>
          <div className="capstone_text">
            The Ultrasound chip will shoot a pulse and the machine will receive a returned pulse data to
            calculate the distance in between the machine and the objects,
            with this data the system is able to caculate the distance and we programmed if the distance is less than
            certain number, the motors will automatically stop operating to avoid collision. 
            The system will display calculated distance data on the screen as shown in the Figure 2 above.
          </div>

          <div className="capstone_text">
            Thank you for reading my quick review of my Capstone project, if you are like to continue read more about
            my Capstone project you can also check out from link below.
          </div>
        </div>

        <a style={{margin:"5vh"}} href="https://drive.google.com/file/d/1wrqfTpZOJJPCCQ0Tt5nZ3v1rLzP2rjVg/view?usp=sharing" target="_blank">Click here to view full Google Docs</a>
      </div>
    </>
  );
}

export default Capstone;
