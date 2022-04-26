import "./process.scss";
import React, { useContext } from "react";
import Title from "../../ux/title/Title";
import { ThemeContext } from "../../theme/theme";
import Paragraph from "../../ux/paragraph/Paragraph";
import {SiTheconversation, SiTarget, SiWheniwork, SiCachet} from 'react-icons/si'

export default function Process() {
  const theme = useContext(ThemeContext);
  const processSteps = [
    {
      id: 0,
      title: "Consultatie",
      icon: <SiTheconversation/>,
      text: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates harum autem quos magni. A, fugiat voluptatibus. Culpa perferendis ullam mollitia!",
    },
    {
      id: 1,
      title: "Doel stellen",
      icon: <SiTarget/>,
      text: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates harum autem quos magni. A, fugiat voluptatibus. Culpa perferendis ullam mollitia!",
    },
    {
      id: 2,
      title: "Designen",
      icon:  <SiWheniwork/>,
      text: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates harum autem quos magni. A, fugiat voluptatibus. Culpa perferendis ullam mollitia!",
    },
    {
      id: 3,
      title: "Evalueren",
      icon:<SiCachet/>,
      text: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates harum autem quos magni. A, fugiat voluptatibus. Culpa perferendis ullam mollitia!",
    },
  ];
  return (
    <div className="process" id="process">
      <Title content="proces" size={4} />
      <div className="process-chart">
        {processSteps.map(({ id, icon, title, text }) => {
          return (
            <>
            <div
              key={id}
              className="process-chart-box"
              style={{ background: theme.primary + '30'}}
            >
              <div
                className="pcb-title"
                style={{ color: theme.text }}
              >
                <div className={"pcb-icon"} style={{color: theme.cta}}>{icon}</div>
                <Title content={title} size={2} />
              </div>
              <div className="pcb-text">{text}</div>
            </div>
            <div className="flow-line" style={{background: theme.cta}}></div>
            </>
          );
        })}
      </div>
    </div>
  );
}
