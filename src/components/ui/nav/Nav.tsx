import { useContext } from "react";
import { ThemeContext } from "../../theme/theme";
import "./nav.scss";
export default function Nav(props: { children: any }) {
  const theme = useContext(ThemeContext);
  return (
    <div className="nav" >
      <div id="nav-logo">STCKD WEBSITE</div>
      <div className="nav-actions">
        {/* <Button invert content={"Sign up"} link={""} />
        <Button content={"Log in"} invert={false} link={""} /> */}
        {props.children}
      </div>
    </div>
  );
}
