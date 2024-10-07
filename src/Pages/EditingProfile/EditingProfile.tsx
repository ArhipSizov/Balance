import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ref, update } from "firebase/database";
import { database } from "../../Services/store/index";
import { NavLink } from "react-router-dom";

import "./EditingProfile.scss";

export default function EditingProfile() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [family, setFamily] = useState("");
  const [work, setWork] = useState("");
  const [key, setKey] = useState("");
  

  const navigate = useNavigate();
  const userArr = useSelector((state: any) => state.user.user);
  if (email == "") {
    userArr.forEach((element: any) => {
      setName(element.name);
      setAge(element.age);
      setFamily(element.family);
      setEmail(element.email);
      setWork(element.work);
      setKey(element.key);
    });
  }

  function updateDatabase() {
    const updates: any = {};
    updates["/users/" + key] = null;

    const postData = {
      email: email,
      age: age,
      family: family,
      work: work,
      key: key,
      name: name,
    };
    console.log(postData);

    updates["/users/" + key] = postData;
    navigate("/profile");
    return update(ref(database), updates);
  }
  return (
    <form onSubmit={() => updateDatabase()} className="editing_profile">
      <NavLink to="/profile">
        <img className="img_alt" src="/back.svg" alt="" />
        <img className="img" src="/back_alt.svg" alt="" />
      </NavLink>
      <div>
        <p>Имя</p>
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text"
        />
      </div>
      <div>
        <p>Возраст</p>
        <input
          value={age}
          onChange={(event) => setAge(event.target.value)}
          type="number"
        />
      </div>
      <div>
        <p>Семейное положение</p>
        <input
          value={family}
          onChange={(event) => setFamily(event.target.value)}
          type="text"
        />
      </div>
      <div>
        <p>Работа/учёба</p>
        <input
          value={work}
          onChange={(event) => setWork(event.target.value)}
          type="text"
        />
      </div>
      <input className="button second_color" type="submit" />
    </form>
  );
}
