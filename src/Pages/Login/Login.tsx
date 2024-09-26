import { NavLink } from "react-router-dom";
import { useState } from "react";

import "./Login.scss";

export default function Login() {
  const [type, setType] = useState<boolean>(true);
  return (
    <div className="login">
      <h1>С возвращением!</h1>
      <form>
        <div>
          <p className="grey_p">Ваш e-mail</p>
          <input type="text" />
          <img src="/e_mail.svg" alt="" />
        </div>
        <div>
          <p className="grey_p">Пароль</p>
          <input type={type ? "password" : "text"} />
          <img onClick={() => setType(!type)} src="/eye.svg" alt="" />
        </div>
        <NavLink className="no_password_a second_color_p" to="remember">
          Забыли пароль?
        </NavLink>
        <input
          className="second_color"
          type="submit"
          value="Зарегистрироваться"
        />
      </form>
      <div className="bottom">
        <p>Нет аккаунта?</p>
        <NavLink className="second_color_p" to="/register">
          Зарегистрируйтесть
        </NavLink>
      </div>
    </div>
  );
}
