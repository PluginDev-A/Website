import React, { useContext } from "react";
import { ThemeContext } from "../../../theme/theme";
import Button from "../../ux/button/Button";
import Title from "../../ux/title/Title";
import "./contact.scss";
import { BsAt, BsPhoneFill, BsLinkedin } from "react-icons/bs";

function Contact() {
  const theme = useContext(ThemeContext);
  return (
    <div className="contact" id="contact">
      <Title content={"contact"} size={3} />
      <div className="contact-info">
        <Button invert link={'mailto:nl.ee.marketing@gmail.com'} ><BsAt/> nl.ee.marketing@gmail.com</Button>
        <Button invert ><BsPhoneFill/> +(31) 0640816873</Button>
        <Button invert link={'https://www.linkedin.com/in/jan-arend-4201a1157/'}><BsLinkedin/> LinkedIn</Button>
      </div>
    </div>
  );
}

export default Contact;
