import React from "react";
import "./title.scss";
export default function Title(props: { content: string; size: number; id: string }) {
  return (
    <div className="title-h1" style={{ fontSize: props.size + "rem" }} id={props.id}>
      {props.content}
    </div>
  );
}
