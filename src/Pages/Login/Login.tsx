import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import "./Login.scss";

export default function Login() {
  const [type, setType] = useState<boolean>(true);
  const [pasvord, setPasvord] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  

  const navigate = useNavigate();

  function getLoginData(event: any) {
    event.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, pasvord).then(() => {
      navigate("/profile");
    });
  }
  return (
    <div className="login">
      <h1>С возвращением!</h1>
      <form onSubmit={getLoginData}>
        <div>
          <p className="grey_p">Ваш e-mail</p>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />
          <img src="/e_mail.svg" alt="" />
        </div>
        <div>
          <p className="grey_p">Пароль</p>
          <input
            value={pasvord}
            onChange={(e) => setPasvord(e.target.value)}
            type={type ? "password" : "text"}
          />
          <img onClick={() => setType(!type)} src="/eye.svg" alt="" />
        </div>
        <NavLink className="no_password_a second_color_p" to="remember">
          Забыли пароль?
        </NavLink>
        <input
          className="second_color"
          type="submit"
          value="Войти"
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
