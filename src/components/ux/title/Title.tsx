import React, { useContext } from "react";
import { ThemeContext } from "../../../theme/theme";
import "./title.scss";
export default function Title(props: {
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
    fontSize: props.size + "rem"};


  return (
    <h1 className="title-h1" style={titleStyle} id={props.id}>{props.content}</h1>
  );
}
