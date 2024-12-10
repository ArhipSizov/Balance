import "./BlockTherapists.scss";
import { NavLink } from "react-router-dom";

export default function BlockTherapists({id, name, type, long, cost, setIdTherapists}:any) {


  
  return (
    <NavLink to="/therapistsFullBlock" onClick={() =>setIdTherapists(id)} className="block_therapists not_alt">
      <img src={"/therapists/" + id + ".png"} alt="" />
      <p>{name}</p>
      <p className="grey_p">{type}</p>
      <div>
        <p>{"Сессия " + long + " минут, " + cost + "$"}</p>
      </div>
    </NavLink>
  );
}