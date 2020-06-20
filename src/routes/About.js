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
          <img className="Me" src={Me}></img>
          <h1>Hello,</h1>
          <h1>I'm Alex Yoon</h1>
          <br></br>
          <h2>a programmer</h2>

          <p>
            I studied Computer Engineering for 2 years at NAIT, my course
            focused <img className="Nait" src={Nait}></img> learning a
            Object-Oriented Programming, C and C++ language memory management, Web
            applications and Hardware Interfacing. I am a person that like to
            interacting with new challenges, so I enjoy to picking up new
            skills and learn continuously from school. In my college I handled two to three
            projects per week and I ended up with finishing over 100+ projects.
            <br></br>
            <br></br>I have positive and realistic personality, when I face a
            difficulty or problem I accept as a challenge and go over it. 
            I get re-energized and let my stress out by talking and
            meeting with people, playing sports, and listening to my favorite
            musics.
            <br></br>
            <br></br>I achieved a Computer Engineering Degree in 2019 and
            currently I am studying more on frontend side to
            expand my expertise because I enjoys designing visuals,
            developing user interfaces and also coding. I hope you enjoyed my website and 
            feel free to reach me out for any types of conversation to
            wonsangalex@gmail.com.
          </p>
          <div className="hrefs">
            <a href="https://www.linkedin.com/in/alex-yoon-0793641a5/" target="_blank">Linkedin</a>
            <a href="https://www.instagram.com/wonsang_portfo/" target="_blank">instagram</a>
            <a href="https://drive.google.com/file/d/1kt0UUMeDjw52NxYTAwBeOa6AcDcRo90M/view?usp=sharing" target="_blank">
              View Resume
            </a>
            <a href="https://github.com/alexyoon97" target="_blank">
              <img className="github" src={Github}></img>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
