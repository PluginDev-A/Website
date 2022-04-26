import React, { useContext, useState } from "react";
import { BsLinkedin, BsPersonCircle } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import "./socials.scss";
import { ThemeContext } from "../../theme/theme";

function Socials() {
  const theme = useContext(ThemeContext);

  return (
    <>
      <div className="socials" style={{ color: theme.primary }}>
        <span
          className="socials-stripe"
          style={{ background: theme.secondary }}
        ></span>
        <a aria-label={"Github link"} href="https://github.com/PluginDev-A">
          <FaGithub />
        </a>
        <a aria-label={"About link"} href="#about">
          <BsPersonCircle />
        </a>
        <a
          aria-label={"LinkedIn link"}
          href="https://www.linkedin.com/in/jan-arend-4201a1157/"
        >
          <BsLinkedin />
        </a>
        <span
          className="socials-stripe"
          style={{ background: theme.secondary }}
        ></span>
      </div>
    </>
  );
}

export default Socials;
