import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Omar from "../Services/Ömər_Babaverdiyev.pdf";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Services = () => {
  const transition = { duration: 1, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="services" id="Services">
      {/* left side */}
      <div className="awasome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Services</span>
        <span>
          Lorem ipsum dolor sitisicing elit.
          <br />
          odit odio corru asp repellat, voluptate consequuntur ullam minima
          temporibus repellendus vitae laudantium.
        </span>

        <a href={Omar} download>
          <button className="button s-button">Download CV</button>
        </a>

        <div className="blur s-blur1" style={{ background: "#abf1ff94" }}></div>
      </div>

      {/* right side */}

      <div className="cards">
        <motion.div
          whileInView={{ left: "14rem" }}
          initial={{ left: "25rem" }}
          transition={transition}
          style={{ left: "14rem" }}
        >
          <Card emoji={HeartEmoji} heading={"Design"} detail={"Figma"} />
        </motion.div>

        {/* {second cards} */}
        <div style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={
              "Html,Css,Javascript,ReactJS,(Redux,Redux-Toolkit,ContextApi)"
            }
          />
        </div>

        {/* 3rd */}

        <div style={{ top: "19rem", left: "12rem" }}>
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={"Lorem ipsum dolor sit amet"}
          />
        </div>

        <div
          className="blur s-blur2"
          style={{ backgound: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
