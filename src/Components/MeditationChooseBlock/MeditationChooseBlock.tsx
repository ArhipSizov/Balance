import { NavLink } from "react-router-dom";
import "./MeditationChooseBlock.scss";

export default function MeditationChooseBlock(i: any) {
  return (
    <NavLink onClick={()=>i.setIdMusic(i.id)} to="/player" className="meditation_choose_block">
      <img className="back_img" src={i.img} alt="" />
      <div className="meditation_choose_block">
        <h2>{i.name}</h2>
        {i.type.map((item: any) => (
          <div>
            <img src={item.img} alt="" />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </NavLink>
  );
}
