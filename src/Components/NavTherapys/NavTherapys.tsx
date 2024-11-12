import "./NavTherapys.scss";
import { NavLink } from "react-router-dom";

export default function NavTherapys() {
  return (
    <div className="nav_therapys">
      <p className="nav_p_meditation">Терапия</p>
      <div className="meditation_nav_all">
        <div className="meditation_nav">
          <NavLink to="/lectures" className="third_color meditation_nav_block">
            <p className="third_color_p">Лекции</p>
          </NavLink>
          <NavLink
            to="/meditation"
            className="third_color meditation_nav_block"
          >
            <p className="third_color_p">Медитации</p>
          </NavLink>
          <NavLink
            to="/therapists"
            className="third_color meditation_nav_block"
          >
            <p className="third_color_p">Терапевты</p>
          </NavLink>
          <NavLink to="/webinars" className="third_color meditation_nav_block">
            <p className="third_color_p">Live вебинары</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
