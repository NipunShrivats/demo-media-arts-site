import React from "react";
import "./HeroStyle.css";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  return (
    <>
      <div className="hero container">
        <div className="hero-text hero-block">
          <h1>welcome</h1>
          <h3>to</h3>
          <h1 className="last-line">sensationz media & arts</h1>
          <p>
            At Sensationz Media & Arts, we have 4 major ventures,
            <br /> know more about them by clicking on button given below..
          </p>
          <button className="btn">
            <Link to="services" smooth={true} offset={-210} durastion={500}>
              Explore Our Services
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
