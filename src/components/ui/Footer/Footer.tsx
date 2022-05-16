import "./Footer.scss";
import React, { useContext } from "react";
import { ThemeContext } from "../../../theme/theme";
import Logo from "../../ux/logo/Logo";
import { BsFilePdf } from "react-icons/bs";
import Button from "../../ux/button/Button";

export default function Footer() {
  const theme = useContext(ThemeContext);
  return (
    <div
      className="footer"
      style={{ background: theme.primary, color: theme.text }}
    >
      <div className="footer-container">
        <div className="footer-content" id="f-c1">
          <Logo color={theme.text} />
          <span style={{ color: theme.text, fontWeight: "bold" }}>
            STCKD WEB
          </span>
        </div>
        <div className="footer-content" id="f-c2">
          <span>
            <b>Email:</b> <br />
            nl.ee.marketing@gmail.com
            <br />
            <br />
            <b>Adres:</b>
            <br />
            Filipijnen 317, 3524JM, Utrecht
          </span>

          <span>
            <b>Telefoon:</b>
            <br />
            0640816873
            <br />
            <br />
            <b>Portfolio:</b>
            <br />
            STCKD.Space
          </span>
        </div>

        <div className="footer-content" id="f-c4">
          <Button
            invert={false}
            link={
              "mailto:nl.ee.marketing@gmail.com?subject=Contact%20via%20STCKD%20WEBDESIGN"
            }
            content={"Contact"}
          />
        </div>
      </div>
      <div
        className="footer-credits"
        style={{ background: theme.text + "20", color: theme.text }}
      >
        <div className="copyright">
          ©Property of{" "}
          <a style={{ color: theme.text }} href="https://stckd.space">
            stckd.space
          </a>
        </div>
        <a href="https://stckd.space/privacy.html">
          <div className="privacy-statement">
            <BsFilePdf /> privacy statement
          </div>
        </a>
      </div>
    </div>
  );
}
