import React from "react";
import "./paragraph.scss";
export default function Paragraph(props: { children: any; id: string }) {
  return (
    <div className="paragraph" id={props.id}>
      {props.children}
    </div>
  );
}
