import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../theme/theme";
import Button from "../../ux/button/Button";
import Paragraph from "../../ux/paragraph/Paragraph";
import GradientTitle from "../../ux/title/GradientTitle";
import Title from "../../ux/title/Title";
import "./welcome.scss";

export default function Welcome() {
  const theme = useContext(ThemeContext);
  return (
    <div className="welcome">
      <div className="welcome-msg">
        <GradientTitle
          content={"STCKD"}
          size={9}
          id={"welcome-title"}
          
        />
        <Paragraph id={"welcome-text"} size={1.3} centerText>
          ontwerpt en ontwikkelt samen met jou gebruiksvriendelijke en
          inspirerende websites met nadruk op een clean en modern uiterlijk,
          maar ook achter de schermen wordt alles ingericht op maximale
          vindbaarheid en performance!
        </Paragraph>
        <Button content={"Verder"} invert={false} link={"#process"} />
        <Link to="/cases">
          <Button content={"cases"} invert />
        </Link>
      </div>
      {/* <WebsiteSVGcopy className="welcome-svg" /> */}
    </div>
  );
}
