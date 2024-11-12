import "./BlockMeditation.scss";
import { NavLink } from "react-router-dom";

interface item {
  setIdMeditation: any;
  img: string;
  name: string;
  description: string;
  id: string;
}

export default function BlockMeditation(i: item) {
  return (
    <NavLink
    to="/meditationchoose"
      onClick={() => i.setIdMeditation(i.id)}
      className="block_meditation not_alt"
    >
      <img src={i.img} alt="" />
      <h2>{i.name}</h2>
      <p className="gray_p">{i.description}</p>
    </NavLink>
  );
}
