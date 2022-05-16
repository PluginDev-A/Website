import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../theme/theme";
import "./button.scss";

export default function Button(props: {
  invert?: boolean;
  link?:any;
  content?: string;
  id?: string;
  fullwidth?: boolean;
  children?: any;
}) {
  var style: Record<string, any> = {};
  const theme = useContext(ThemeContext);
  const buttonStyle = {
    color: theme.primary,
    background: theme.cta,
    border: "solid 2px " + theme.cta,
  };
  const invertStyle = {
    color: theme.cta,
    background: theme.primary,
    border: "solid 2px " + theme.cta,
  };

  props.invert ? (style = invertStyle) : (style = buttonStyle);
  const [colorStyle, setColorStyle] = useState(false);
  const [hover, setHover] = useState(false);
  useEffect(() => {console.log("Button")},[hover])


  colorStyle
    ? props.invert
      ? (style = buttonStyle)
      : (style = invertStyle)
    : props.invert
    ? (style = invertStyle)
    : (style = buttonStyle);

    props.fullwidth ? style.width = "100%" : style.width = 'unset';
  return (
    <button
      id={props.id}
      onClick={() => {
        navigator.vibrate(20);
        if(props.link != null){
        window.location.assign(props.link);
        }
      }}
      onMouseEnter={() => {
        setColorStyle(!colorStyle);
        setHover(!hover);

      }}
      onMouseLeave={() => {
        setColorStyle(!colorStyle);
        setHover(!hover);
      }}
      className="ux-btn"
      style={style}
    >
      {props.content} {props.children}
    </button>
  );
}