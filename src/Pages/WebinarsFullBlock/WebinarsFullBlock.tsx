import "./WebinarsFullBlock.scss";
import db from "../../Common/Webinars.json";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function WebinarsFullBlock(item: any) {
  const [id, setId] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  

  db.forEach((element: any) => {
    if (element.id == item.idWebinars && id == "") {
      setId(element.id);
      setName(element.name);
      setTime(element.time);
      setDescription(element.description);
    }
  });
  return (
    <div className="webinars_full_block">
      <NavLink to="/webinars">
        <img className="back_img" src="/back.svg" alt="" />
        <h1>Лекции</h1>
      </NavLink>
      <img className="main_img" src={"/webinars/" + id + ".jpg"} alt="" />
      <p>{time}</p>
      <h2>{name}</h2>
      <p className="">{description}</p>
    </div>
  );
}
