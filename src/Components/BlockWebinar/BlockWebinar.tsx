import "./BlockWebinar.scss";
import { NavLink } from "react-router-dom";

export default function BlockWebinar(item:any) {
  
  return (
    <NavLink onClick={() => item.setIdWebinars(item.id)} to="/webinarsfullblock" className="block_webinar not_alt">
      <img className="main_img" src={"/webinars/"+ item.id + ".jpg"} alt="" />
      <div>
        <h2>{item.name}</h2>
        <div className="block_webinar_footer">
          <div>
            <img src="/webinars/calendar.svg" alt="" />
            <p>{item.time}</p>
          </div>
          <h2>{item.cost}$</h2>
        </div>
      </div>
    </NavLink>
  );
}
