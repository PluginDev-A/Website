import React, { useContext } from "react";
import { ThemeContext } from "../../../theme/theme";
import "./title.scss";
export default function GradientTitle(props: {
  content:
    | string
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  size: number;
  id?: string;
}) {
  const theme = useContext(ThemeContext);
  const titleStyle: Record<string, any> = {
    fontSize: props.size + "vmax"};


  return (
    <h1 className="gradient-title-h1" style={titleStyle} id={props.id}>
      {props.content}
    </h1>
  );
}
