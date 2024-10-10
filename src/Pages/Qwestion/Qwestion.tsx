import { NavLink } from "react-router-dom";

import "./Qwestion.scss";

export default function Qwestion() {
  return (
    <div className="qwestion">
        <div>
            <h1>Что хотелось бы видеть на сайте?</h1>
            <textarea/>
        </div>
        <div>
            <h1>Что неудобно на сайте?</h1>
            <textarea/>
        </div>
        <div>
            <h1>Ваш комментарий</h1>
            <textarea />
        </div>
        <NavLink to="/profile" className="second_color">
            <p>Отправить</p>
        </NavLink>
    </div>
  );
}
