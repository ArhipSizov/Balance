import { NavLink, useNavigate } from "react-router-dom";
import { signOut, getAuth } from "firebase/auth";

import "./Profile.scss";

export default function Profile() {
  function getCookie(name: string) {
    let matches = document.cookie.match(
      new RegExp(
        "(?:^|; )" +
          name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
          "=([^;]*)"
      )
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  const auth = getAuth();
  const navigate = useNavigate();

  function signOutUser() {
    signOut(auth).then(() => {
      navigate("/pre_register");
    });
  }

  function customTheme() {
    if (getCookie("theme") == "lite") {
      document.cookie = "theme=dark";
    } else {
      document.cookie = "theme=lite";
    }
    location.reload();
  }
  return (
    <div className="profile grey">
      <div className="profile_nav">
        <h1>Профиль</h1>
        <img className="img" src="/profile/notifications.svg" alt="" />
        <img className="img_alt" src="/profile/notifications_alt.svg" alt="" />
      </div>
      <div className="profile_main">
        <img src="/profile/user_photo.png" alt="Ваше фото" />
        <h1>name</h1>
        <p>e-mail</p>
      </div>
      <NavLink to="/ass993" className="redact_link second_color_p">
        Редактировать профиль
      </NavLink>
      <div className="block_profile not_alt">
        <div>
          <img src="/profile/lock.svg" alt="" />
          <p>Пин-код</p>
        </div>
        <div>
          <img src="/profile/notification_gray.svg" alt="" />
          <p>Напоминания</p>
        </div>
        <div className="img" onClick={() => customTheme()}>
          <img src="/profile/moon.svg" alt="" />
          <p>Темная тема</p>
        </div>
        <div className="img_alt" onClick={() => customTheme()}>
          <img src="/profile/sun.svg" alt="" />
          <p>Светлая тема</p>
        </div>
      </div>
      <div className="block_profile not_alt">
        <div>
          <img src="/profile/shop.svg" alt="" />
          <p>История покупок</p>
        </div>
        <div>
          <img src="/profile/card.svg" alt="" />
          <p>Карта</p>
        </div>
      </div>
      <div className="block_profile not_alt">
        <div>
          <img src="/profile/massage.svg" alt="" />
          <p>Написать отзыв</p>
        </div>
        <div>
          <img src="/profile/survey.svg" alt="" />
          <p>Пройти опрос</p>
        </div>
      </div>
      <div className="block_profile not_alt">
        <NavLink to="/help">
          <img src="/profile/qestion.svg" alt="" />
          <p>Поддержка</p>
        </NavLink>
        <div>
          <img src="/profile/qestion_app.svg" alt="" />
          <p>О приложении</p>
        </div>
        <div>
          <img src="/profile/contact.svg" alt="" />
          <p>Связаться</p>
        </div>
      </div>
      <p onClick={signOutUser} className="exit second_color_p">
        Выйти
      </p>
    </div>
  );
}
