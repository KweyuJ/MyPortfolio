import React, { useState } from "react";
import {
  UilWebGrid,
  UilArrowRight,
  UilTimes,
  UilCheckCircle,
  UilEdit,
  UilArrow
} from '@iconscout/react-unicons';
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>

      <div className="services__container container grid">
        {/* UI/UX Designer Section */}
        <div className="services__content">
          <div>
            <UilArrow className="services__icon" />
            <h3 className="services__title">
              UI/UX <br /> Designer
            </h3>
          </div>

          <span onClick={() => toggleTab(1)} className="services__button">
            View More
            <UilArrowRight className="services__button-icon" />
          </span>

          <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <UilTimes onClick={() => toggleTab(0)} className="services__modal-close" />
              <h3 className="services__modal-title">UI/UX Designer</h3>
              <p className="services__modal-description">
                I create user-centered designs and seamless user experiences.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <UilCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                    Design user-centric interfaces that enhance usability and engagement.
                  </p>
                </li>
                <li className="services__modal-service">
                  <UilCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                    Conduct user research, wireframing, and prototyping to create intuitive user flows.
                  </p>
                </li>
                <li className="services__modal-service">
                  <UilCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                    Design and test responsive web and mobile applications.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Web Developer Section */}
        <div className="services__content">
          <div>
            <UilWebGrid className="services__icon" />
            <h3 className="services__title">
              Web <br /> Developer
            </h3>
          </div>

          <span onClick={() => toggleTab(2)} className="services__button">
            View More
            <UilArrowRight className="services__button-icon" />
          </span>

          <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <UilTimes onClick={() => toggleTab(0)} className="services__modal-close" />
              <h3 className="services__modal-title">Web Developer</h3>
              <p className="services__modal-description">
                I specialize in developing high-performing and responsive websites.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <UilCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                    Build responsive and dynamic websites using React and Node.js.
                  </p>
                </li>
                <li className="services__modal-service">
                  <UilCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                    Develop efficient, scalable back-end systems.
                  </p>
                </li>
                <li className="services__modal-service">
                  <UilCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                    Optimize websites for speed, SEO, and performance.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Graphic Designer Section */}
        <div className="services__content">
          <div>
            <UilEdit className="services__icon" />
            <h3 className="services__title">
              Graphic <br /> Designer
            </h3>
          </div>

          <span onClick={() => toggleTab(3)} className="services__button">
            View More
            <UilArrowRight className="services__button-icon" />
          </span>

          <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <UilTimes onClick={() => toggleTab(0)} className="services__modal-close" />
              <h3 className="services__modal-title">Graphic Designer</h3>
              <p className="services__modal-description">
                I create compelling visuals that bring brands to life.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <UilCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                    Design brand identities, logos, and marketing materials.
                  </p>
                </li>
                <li className="services__modal-service">
                  <UilCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                    Create visually compelling graphics for both print and digital platforms.
                  </p>
                </li>
                <li className="services__modal-service">
                  <UilCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                    Collaborate with clients to create custom designs that align with their vision.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
