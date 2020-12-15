import React, { useState } from "react";
import { useTransition, animated } from "react-spring";
import { Link } from "react-router-dom";
import "../components/Portfo_Component.css";

function Portfo_Component({ Portfolio_list }) {
  //initialization
  const [index, setIndex] = useState(0);
  //index control function
  function onClick(){
    setIndex((prevstate) => (prevstate + 1) % Portfolio_list.length);
  }
  //spring style options
  const transitions = useTransition(index, (p) => p, {
    from: {opacity: 0, transform: "translate3d(-30%,0,0)" },
    enter: {opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: {opacity: 1, transform: "translate3d(0%,0,0)" },
  });
  return (
    //page instructor line 20 to 25
    <div className="portfo_container">
      <header className="header">PROJECTS</header>
      <div style={{paddingTop:"3vh", color:"grey"}}>codes are uploaded on <a style={{color:"grey", textDecoration:"underline"}} rel="noopener" href="https://github.com/alexyoon97" target="_blank">github</a> 
      </div>
      {/* image slider for portfolio list */}
      <div className="index_display">
        {
          [...Array(Portfolio_list.length)].map((e,i) =>{
            if(index === i){
              return(<button key={i} className="current_portfolio">●</button>)
            }
            else{
              return(<button key={i} className="">●</button>)
            }
          })
        }

      </div>
      <div className="imgSlider">
        {transitions.map(({ item, props, key }) => {
          return (
            <animated.div key={key} style={{ ...props }}>
              <img
                onClick={onClick}
                className="portfo_img"
                src={Portfolio_list[index].img}
                alt={Portfolio_list[index].name}
              ></img>
              {Portfolio_list[index].link === "" ? (
                <Link
                style={{textDecoration:"none"}} 
                  to={{
                    pathname: `/portfolios/${Portfolio_list[index].name}`
                  }}
                >
                  {Portfolio_list[index].name} - Click Here
                </Link>
              ) : (
                <a style={{textDecoration:"none"}}  href={Portfolio_list[index].link} rel="noreferrer">
                  {Portfolio_list[index].name} - Click Here
                </a>
              )}
              );
            </animated.div>
          );
        })}
      </div>
    </div>
  );
}

export default Portfo_Component;
