import { Link } from "react-router-dom";
import "./nav.scss";
export default function Nav(props: { children: any; linkDivider: string }) {
  return (
    <div className="nav">
      <div className="nav-links">
        <Link to="/" className="nav-link"> Home </Link>
        <span className="nav-link-divider">{props.linkDivider}</span>
        <Link to="/cases" className="nav-link"> Cases</Link>
      </div>
      <div className="nav-actions">
        {/* <Button invert content={"Sign up"} link={""} />
        <Button content={"Log in"} invert={false} link={""} /> */}
        {props.children}
      </div>
    </div>
  );
} 
 