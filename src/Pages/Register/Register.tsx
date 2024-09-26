import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../../Services/store/Slice";
import { addUserDB } from "../../Services/fbUsers";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useSelector } from "react-redux";
import { userArrAdd } from "../../Common/userArrAdd";


import "./Register.scss";

export default function Register() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [type, setType] = useState<boolean>(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addTask = () => dispatch(addUser({ email, password }));
  const userArr = useSelector((state:any) => state.user.user);

  if (email == "") {
    userArrAdd(userArr, setEmail);
  }


  function getRegisterData(event:any) {
    event.preventDefault();
    const auth:any = getAuth();
    createUserWithEmailAndPassword(auth, email, password).then(() => {
      updateProfile(auth.currentUser, {
        displayName: null,
        email: null,
      }).then(() => {
        navigate("/profile");
      });
    });
    addUserDB({ email, password });
    addTask();
  }

  return (
    <div className="register">
      <h1>Станьте участником!</h1>
      <form onSubmit={getRegisterData}>
        <div>
          <p className="grey_p">Ваш e-mail</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
          />
          <img src="/e_mail.svg" alt="" />
        </div>
        <div>
          <p className="grey_p">Пароль</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type={type ? "password" : "text"}
          />
          <img onClick={() => setType(!type)} src="/eye.svg" alt="" />
        </div>
        <input
          className="second_color"
          type="submit"
          value="Зарегистрироваться"
        />
      </form>
      <div className="bottom">
        <p>Уже есть аккаунт?</p>
        <NavLink className="second_color_p" to="/login">
          Войдите
        </NavLink>
      </div>
    </div>
  );
}
