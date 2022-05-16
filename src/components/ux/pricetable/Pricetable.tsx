import "./pricetable.scss";
import React, { useContext } from "react";
import { ThemeContext } from "../../../theme/theme";
import Button from "../../ux/button/Button";
import { BiChevronRightCircle } from "react-icons/bi";
import Title from "../title/Title";
import Paragraph from "../paragraph/Paragraph";

export default function Pricetable(props: {
  title:
    | string
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  description:
    | number
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  icon: any;
  link: string | URL;
}) {
  const theme = useContext(ThemeContext);
  return (
    <div
      className="pricetable"
      style={{
        background: theme.primary + 'da',
        border: "solid thin " + theme.cta + "20",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="plan-title" style={{ color: theme.text }}>
          {props.icon}
          <Title content={props.title} size={1.5} id={""} />
        </div>

        <div className="plan-description">
          <Paragraph>{props.description}</Paragraph>
        </div>
        {/* <div>
          <SiWhatsapp style={{color: theme.cta}}/> <b>WhatsApp communicatie</b>
        </div> */}
      </div>
      <div className="plan-btn">
        <Button
          invert={false}
          link={props.link}
          content={"verder"}
          id={"website-plan"}
        />
      </div>
    </div>
  );
}
