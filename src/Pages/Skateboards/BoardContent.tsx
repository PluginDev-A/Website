import Title from "../../components/ux/title/Title";
import './skateboards.scss';
function BoardContent() {
 
  return (
    <>
      <div className="boards-main">
        <div className="boards">
          <Title content={"Vertex Boards"} size={6} />P L E A S E
          &nbsp;&nbsp;&nbsp;&nbsp; S C R O L L
        </div>
        <div className="boards-content" id={'bc'}>
          <ul>
            <li>Clothing</li>
            <li>Boards</li>
            <li>Events</li>
            <li>The team</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default BoardContent;
