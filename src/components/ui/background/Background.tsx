import "./background.scss";
import React, { useContext } from "react";
import SvgComponent from "./Web";
import { ThemeContext } from "../../theme/theme";
export default function Background() {
  const theme = useContext(ThemeContext);
  return (
    <div className="background">
      <SvgComponent
        className="svg"
        style={{ fill: theme.cta, stroke: theme.cta }}
      />
    </div>
  );
}
