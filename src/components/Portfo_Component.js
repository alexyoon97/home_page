import React, { useCallback, useState } from "react";
import { useTransition, animated } from "react-spring";
import { Link } from "react-router-dom";

function Portfo_Component({ Portfolio_list }) {
  const [index, set] = useState(0);
  const onClick = useCallback(
    () => set((state) => (state + 1) % Portfolio_list.length),
    []
  );
  const transitions = useTransition(index, (p) => p, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });
  return (
    <div className="portfo_container">
      <header className="header">PROJECTS</header>
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
                  to={{
                    pathname: `/portfolios/${Portfolio_list[index].name}`
                  }}
                >
                  {Portfolio_list[index].name} - Click Here
                </Link>
              ) : (
                <a href={Portfolio_list[index].link}>
                  {Portfolio_list[index].name} - Click Here
                </a>
              )}
              );
            </animated.div>
          );
          //
        })}
      </div>
    </div>
  );
}

export default Portfo_Component;
