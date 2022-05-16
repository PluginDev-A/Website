import "./process.scss";
import { useContext } from "react";
import Title from "../../ux/title/Title";
import { ThemeContext } from "../../../theme/theme";
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
      text: "Dit is een online kennismakings-gesprek waarin jij kan vertellen hoe jouw ultieme online-omgeving eruit zou moeten zien. We bekijken samen jouw brand, en wat de invloed kan zijn van een web-app op jouw zichtbaarheid/efficientie",
    },
    {
      id: 1,
      title: "Doel stellen",
      icon: <SiTarget />,
      text: "Als deze nog niet is aangeleverd stellen we een brand-guide op, en bepalen we de algemene content en look van de website/app.",
    },
    {
      id: 2,
      title: "Designen",
      icon: <SiWheniwork />,
      text: "De website/app wordt vormgegeven met nauw contact over WhatsApp, en jij houdt 24/7 online toegang tot de huidige ontwikkelingen en source-code van je website.",
    },
    {
      id: 3,
      title: "Evalueren",
      icon: <SiCachet />,
      text: "Eventuele laatste revisies worden gemaakt, en na akkoord wordt je website gepubliceerd en wordt eventueel je app ook uitgerold op de App/Play store",
    },
  ];
  return (
    <div className="process" id="process">
      <Title content="Waarom STCKD" size={3} id={""} />
      <Paragraph size={1.3} centerText>
        De visie van STCKD is dat de wensen van de klant altijd centraal staan,
        maar dat de klant óók inzicht krijgt in het hele proces :{" "}
        <b>van design tot code.</b> Dit wordt bereikt door het gesprek te voeren
        over <b>WhatsApp</b>. Dit kanaal wordt dus van Consultatie tot
        Oplevering gebruikt om de beste én snelste service mogelijk te bieden!
      </Paragraph>
      <div className="process-chart">
        {processSteps.map(({ id, icon, title, text }) => {
          return (
            <>
              <div
                key={id}
                className="process-chart-box"
                style={{
                  background: theme.primary + 'da',
                  border: "solid thin " + theme.cta + "20",
                }}
              >
                <div className="pcb-title" style={{ color: theme.text }}>
                  <div className={"pcb-icon"} style={{ color: theme.cta }}>
                    {icon}
                  </div>
                  <Title content={title} size={1.5} id={""} />
                </div>
                <div className="pcb-text">
                  <Paragraph>{text}</Paragraph>
                </div>
              </div>
              <div
                key={id + 10}
                className="flow-line"
                style={{ background: theme.cta, borderColor: theme.cta }}
              ></div>
            </>
          );
        })}
      </div>
    </div>
  );
}
