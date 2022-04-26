import React from "react";
import "./section.scss";
export default function Section(props: {
  content:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) {
  return <div className="section">{props.content}</div>;
}
