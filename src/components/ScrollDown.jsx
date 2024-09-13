import React from "react";
import { UilArrowDown, UilMouseAlt } from '@iconscout/react-unicons';

const ScrollDown = () => {
  return (
    <div className="home__scroll">
      <a href="#about" className="home__scroll-button button--flex">
        <UilMouseAlt className="home__scroll-mouse-icon" />
        <span className="home__scroll-name">Scroll Down</span>
        <UilArrowDown className="home__scroll-arrow" />
      </a>
    </div>
  );
};

export default ScrollDown;
