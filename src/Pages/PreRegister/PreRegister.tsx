import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./PreRegister.scss";

export default function PreRegister() {
  const [img, setImg] = useState<string>("img img_alt");
  const [div, setDiv] = useState<string>(
    "reg_or_log reg_or_log_alt first_color"
  );

  const navigate = useNavigate();

  setTimeout(() => {
    setImg("img");
    setDiv("reg_or_log first_color");
  }, 1);

  return (
    <div className="pre_register">
      <div className="div">
        <img className={img} src="/logo.png" alt="" />
        <h1>Balance</h1>
      </div>
      <div className={div}>
        <h1>Добро пожаловать в Balance</h1>
        <h2>Найдите баланс, найдите блаженство</h2>
        <div
          onClick={() => navigate("/register")}
          className="register_but second_color"
        >
          <p>Создать аккаунт</p>
        </div>
        <div onClick={() => navigate("/login")} className="login_but">
          <p>Войти</p>
        </div>
      </div>
    </div>
  );
}
