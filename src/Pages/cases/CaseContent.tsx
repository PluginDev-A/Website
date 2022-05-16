import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../theme/theme";
import Button from "../../components/ux/button/Button";
import Title from "../../components/ux/title/Title";
import "./casecontent.scss";
export default function CaseContent() {
  const theme = useContext(ThemeContext);
  const cases = [
    { name: "Vertex Boards", link: "skateboards" },
    { name: "Rubix reflection", link: "rubiks" },
  ];
  return (
    <div
      className="case-content"
    >
      <Title content={"Case links"} size={3} />
      <div className="case-links">
        {cases.map(({ name, link }) => {
          return (
            <Link to={link}>
              <Button content={name} fullwidth invert></Button>
                
            </Link>
          );
        })}
      </div>
    </div>
  );
}
