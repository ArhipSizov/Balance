import "./LecturesBlock.scss";
import { NavLink } from "react-router-dom";

interface item{
  name:string,
  description:string,
  id: string,
  setIdLecture:any
}

export default function LecturesBlock(item:item) {
    const description = item.description.substr(0, 40) + "..."
    
  return (
    <NavLink onClick={() => item.setIdLecture(item.id)} to="/lecturesfullblock" className="lectures_block not_alt">
      <img src={"/lectures/"+ item.id + ".jpg"} alt="" />
      <h2>{item.name}</h2>
      <p className="grey_p">{description}</p>
    </NavLink>
  );
}
