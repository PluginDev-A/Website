import "./Footer.scss";
import React, { useContext } from "react";
import { ThemeContext } from "../../theme/theme";
import Socials from "../../ux/socials/Socials";
import Title from "../../ux/title/Title";

export default function Footer() {
  const theme = useContext(ThemeContext);
  return (
    <div className="footer" style={{ background: theme.secondary,color: theme.primary }}>
      <div className="footer-container">
      <div className="footer-content">
        <Title content={"socials"} size={3} />
        <Socials />
      </div>
      <div className="footer-content"></div>
      <div className="footer-content"></div>
      </div>
      <div className="footer-credits" style={{background: theme.primary + '30'}}>©COPYRIGHT OF JAN AREND VAN WINSEN | Property of <a href="https://stckd.space">stckd.space</a></div>
    </div>
  );
}
