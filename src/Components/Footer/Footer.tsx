import { NavLink } from "react-router-dom";

import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer not_alt">
      <div className="big_block1 grey">
        <NavLink to="/ass">
          <div className="big_block2 second_color">
            <img className="plus" src="/footer/plus.svg" alt="" />
          </div>
        </NavLink>
      </div>
      <div className="block">
        <NavLink to="/ass2">
          <img className="img" src="/footer/book.svg" alt="" />
          <img className="img_alt" src="/footer/book_alt.svg" alt="" />
        </NavLink>
        <NavLink to="/ass3">
          <img className="img" src="/footer/brain.svg" alt="" />
          <img className="img_alt" src="/footer/brain_alt.svg" alt="" />
        </NavLink>
      </div>
      <div className="block">
        <NavLink to="/ass4">
          <img className="img" src="/footer/statistics.svg" alt="" />
          <img className="img_alt" src="/footer/statistics_alt.svg" alt="" />
        </NavLink>
        <NavLink to="/profile">
          <img className="img" src="/footer/profile.svg" alt="" />
          <img className="img_alt" src="/footer/profile_alt.svg" alt="" />
        </NavLink>
      </div>
    </div>
  );
}
