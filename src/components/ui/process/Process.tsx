import "./process.scss";
import { useContext } from "react";
import Title from "../../ux/title/Title";
import { ThemeContext } from "../../theme/theme";
import {
  SiTheconversation,
  SiTarget,
  SiWheniwork,
  SiCachet,
} from "react-icons/si";
import Paragraph from "../../ux/paragraph/Paragraph";

export default function Process() {
  const theme = useContext(ThemeContext);
  const processSteps = [
    {
      id: 0,
      title: "Consultatie",
      icon: <SiTheconversation />,
      text: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates harum autem quos magni. A, fugiat voluptatibus. Culpa perferendis ullam mollitia!",
    },
    {
      id: 1,
      title: "Doel stellen",
      icon: <SiTarget />,
      text: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates harum autem quos magni. A, fugiat voluptatibus. Culpa perferendis ullam mollitia!",
    },
    {
      id: 2,
      title: "Designen",
      icon: <SiWheniwork />,
      text: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates harum autem quos magni. A, fugiat voluptatibus. Culpa perferendis ullam mollitia!",
    },
    {
      id: 3,
      title: "Evalueren",
      icon: <SiCachet />,
      text: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates harum autem quos magni. A, fugiat voluptatibus. Culpa perferendis ullam mollitia!",
    },
  ];
  return (
    <div className="process" id="process">
      <Title content="proces" size={3} id={""} />
      <Paragraph id={"process-text"}>
        De visie van STCKD is dat de wensen van de klant altijd centraal staan,
        maar dat de klant óók inzicht krijgt in het hele proces : <i>
          van design tot
          code.
        </i> Dit wordt bereikt door het gesprek te voeren over <b>WhatsApp</b>. Dit
        kanaal wordt dus van Consultatie tot Oplevering gebruikt om de besete
        service mogelijk te bieden!
      </Paragraph>
      <div className="process-chart">
        {processSteps.map(({ id, icon, title, text }) => {
          return (
            <>
              <div
                key={id}
                className="process-chart-box"
                style={{ background: theme.primary }}
              >
                <div className="pcb-title" style={{ color: theme.text }}>
                  <div className={"pcb-icon"} style={{ color: theme.cta }}>
                    {icon}
                  </div>
                  <Title content={title} size={2} id={""} />
                </div>
                <div className="pcb-text">{text}</div>
              </div>
              <div
                key={id + 10}
                className="flow-line"
                style={{ background: theme.cta }}
              ></div>
            </>
          );
        })}
      </div>
    </div>
  );
}
