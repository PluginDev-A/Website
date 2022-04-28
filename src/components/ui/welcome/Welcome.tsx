import React, { useContext, useEffect } from "react";
import Button from "../../ux/button/Button";
import Paragraph from "../../ux/paragraph/Paragraph";
import Title from "../../ux/title/Title";
import "./welcome.scss";
import WebsiteSVGcopy from "./WebsiteSVGcopy";
import { ThemeContext, themes } from "../../theme/theme";

export default function Welcome() {
  const theme = useContext(ThemeContext);
  return (
    <div className="welcome">
      <div className="welcome-msg">
        <Title content={"Nieuwe spin in het web?"} size={4} id={'welcome-title'}/>
        <Paragraph id={"welcome-text"}>
          STCKD ontwerpt en ontwikkelt samen met jou gebruiksvriendelijke en
          inspirerende websites met nadruk op een clean en modern uiterlijk,
          maar ook achter de schermen wordt alles ingericht op maximale
          vindbaarheid en performance!
        </Paragraph>
        <Button content={"Dat wil ik ook!"} invert={false} link={"#process"} />
      </div>
      {/* <WebsiteSVGcopy className="welcome-svg" /> */}
    </div>
  );
}
