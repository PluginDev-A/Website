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
  style?: any;
  fullHeight?: boolean;
}) {

  const style: Record<string, any> = {};
  style.minHeight = props.fullHeight ? "100vh" : 'auto';
  return (
    <div className="section" style={style}>
      {props.content}
    </div>
  );
}
