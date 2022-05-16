import React from "react";
import "./paragraph.scss";
export default function Paragraph(props: {
  children: any;
  id?: string;
  size?: number;
  centerText?: boolean;
}) {

  const style: Record<string, any> = {
    fontSize: props.size + "rem" 
  }
  style.textAlign = props.centerText ? "center" : "left";
  return (

    <div
      className="paragraph"
      id={props.id}
      style={style}
    >
      {props.children}
    </div>
  );
}
