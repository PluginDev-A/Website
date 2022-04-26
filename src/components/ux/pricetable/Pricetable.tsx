import "./pricetable.scss";
import React, { useContext } from "react";
import { ThemeContext } from "../../theme/theme";
import Button from "../../ux/button/Button";
import {SiWhatsapp} from 'react-icons/si'

export default function Pricetable(props: {
  title:
    | string
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  price:
    | number
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  pages:
    | number
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  revisions:
    | string
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  delivery:
    | string
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  ncnp:
    | string
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  link: string | URL;
}) {
  const theme = useContext(ThemeContext);
  return (
    <div className="pricetable" style={{background: theme.primary}}>
      <div
        className="plan-title"
        style={{ background: theme.secondary, color: theme.primary }}
      >
        {props.title}
      </div>
      <div className="plan-price">€{props.price}</div>
      <div className="plan-info">
        <div>
          <b>{props.pages}</b> paginas
        </div>
        <div>
          <b>{props.revisions}</b> revisies
        </div>
        <div>
          <b>{props.delivery}</b> dagen levertijd
        </div>
        <div>
          <b><SiWhatsapp style={{color: theme.cta}}/> WhatsApp communicatie</b>
        </div>
        <Button invert={false} link={props.link} content={"verder"} />
      </div>
    </div>
  );
}
