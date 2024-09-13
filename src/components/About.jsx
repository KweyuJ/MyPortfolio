import React from "react";
import "./about.css";
import AboutImg from "../assets/Mypicture.jpg"; 
import Info from "./Info";

// import CV from "../../assets/Smith-Cv.pdf";

const About = () => {
    return (
      <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My introduction</span>
  
        <div className="about__container container grid">
          <img src={AboutImg} alt="About Me" className="about__img" />
  
          <div className="about__data">
          <Info />
            <p className="about__description">
              Frontend developer, I create web pages with UI / UX user interface,
              I have years of experience and many clients are happy with the
              projects carried out.
            </p>
            
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  