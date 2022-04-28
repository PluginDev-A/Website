import { useContext, useState } from "react";
import "./button.scss";
import { ThemeContext } from "../../theme/theme";
export default function Button(props: {
  invert: boolean;
  link: string | URL;
  content: string;
}) {
  var style = {};

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
  colorStyle
    ? props.invert
      ? (style = buttonStyle)
      : (style = invertStyle)
    : props.invert
    ? (style = invertStyle)
    : (style = buttonStyle);
  return (
    <button
      onClick={() => {
        navigator.vibrate(20);
        window.location.assign(props.link);
      }}
      onMouseEnter={() => {
        setColorStyle(!colorStyle);
      }}
      onMouseLeave={() => {
        setColorStyle(!colorStyle);
      }}
      className="ux-btn"
      style={style}
    >
      {props.content}
    </button>
  );
}
