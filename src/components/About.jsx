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
            I'm a Full-stack Developer with a passion for building and managing
            both the front-end and back-end of web applications, ensuring
            seamless functionality and user experience. In addition to coding, I'm a
            pre-finalist medical student with a keen interest in leveraging
            technology to address healthcare challenges. I'm open to job
            opportunities that allow me to contribute, learn, and grow so don't
            hesitate to reach out!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
