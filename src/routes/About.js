import React from "react";
import "../routes/About.css";
import Me from "../routes/About/Image/me.jpg";
import Nait from "../routes/About/Image/nait.png";
import Github from "../routes/About/Image/github.png";


function About() {
  return (
    <>
      <header className="header">ABOUT</header>
      <div className="about_container">
        <div className="paragraph">
          <img alt="" className="Me_img" src={Me}></img>
          <br></br>
          <h1 style={{color:"#badc58"}}>Hello,</h1>
          <h1 style={{color:"white"}}>My name is Alex Yoon</h1>
          <h2 style={{color:"#ff7979"}}>a developer</h2>

          <p>
            I studied Computer Engineering for 2 years at NAIT, my course
            focused <img alt="" className="Nait" src={Nait}></img> learning
            Object-Oriented Programming C#, C and C++, Web development and Hardware Interfacing. I am a person that likes to interact with new challenges and enjoy learning and pick up new skills to improve more.
            <br></br>
            <br></br>Whenever I face a difficulty or challenges I think as it's a great time to improve 
            and find a critical weakness of myself. 
            I re-energize my-self by talk and meeting with people or playing active and social sports.
            <br></br>
            <br></br>I achieved a Computer Engineering Degree in 2019 and
            currently I am studying more on Front-End side to
            expand my expertise because I am interested in designing visuals and 
            develop User Interfaces. I hope you enjoyed my website and 
            feel free to reach me out for any type of conversation.
          </p>
          <div className="hrefs">
            <a href="https://www.linkedin.com/in/alex-yoon-0793641a5/" target="_blank">Linkedin</a>
            <a href="https://www.instagram.com/wonsang_portfo/" target="_blank">instagram</a>
            <a href="https://drive.google.com/file/d/1kt0UUMeDjw52NxYTAwBeOa6AcDcRo90M/view?usp=sharing" target="_blank">
              View Resume
            </a>
            <a href="https://github.com/alexyoon97" target="_blank">
              <img alt="" className="github" src={Github}></img>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
