import React from "react";
import Image from "react-bootstrap/Image";
import LinkedIn from "../images/icone/linkedin.png";
import twitter from "../images/icone/twitter.png";
import figma from "../images/icone/figma.png";
import github from "../images/icone/github.png";
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/yassinbesbes/">
          <Image src={LinkedIn} alt="LinkedIn" />
        </a>
        <a href="https://twitter.com/Yassin__Besbes">
          <Image src={twitter} alt="Twitter" />
        </a>
        <a href="https://www.figma.com/@yassin_besbes">
          <Image src={figma} alt="Figma" />
        </a>
        <a href="https://github.com/Yassinbesbes">
          <Image src={github} alt="github" />
        </a>
      </div>
      <p className="copy">&copy; 2024 All rights reserved</p>
    </footer>
  );
}

export default Footer;
