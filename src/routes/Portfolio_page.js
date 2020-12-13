import React, { Component } from "react";
import JS_weather_image from "./Portfolios/image/JS_weather_image.png";
import Capstone_image from "./Portfolios/image/Capstone_project_image.JPG";
import JS_minigame_image from "./Portfolios/image/JS_minigame_image.JPG";
import Movie_API_image from "./Portfolios/image/Movie_API_image.JPG";
import "../routes/Portfolio_page.css";
import Portfo_Component from "../components/Portfo_Component";

const Portfolio_list = [
  {
    name: "Recommended outfits for today's weather",
    img: JS_weather_image,
    desc:"",
    link:"https://future-bedecked-gastonia.glitch.me/"
    
  },
  {
    name: "Capstone Project : Robotic Vacuum Cleaner",
    img: Capstone_image,
    desc:
      "The autonomous robotic vacuum cleaner runs a particular algorithm to clean an area in a fast and efficient way.Robotic vacuum cleaners have special components such as cameras, laser sensors, or ultrasound sensors for collision avoidance.",
    link:""
    
  },
  
  {
    name: "Vannila JS minigame",
    img: JS_minigame_image,
    desc: "Win a point when lined a ball",
    link:"https://alexyoon97.github.io/Vanila_JS_minigame/"

  },
  {
    name: "Movie API",
    img: Movie_API_image,
    desc:
      "Fetching a movie data from web and display movie's descriptions and image",
    link:"https://alexyoon97.github.io/movie_app_2020/#/"
  },
];

class Portfolio_page extends Component {
  render() {
    return <Portfo_Component Portfolio_list={Portfolio_list} />;
  }
}

export default Portfolio_page;
