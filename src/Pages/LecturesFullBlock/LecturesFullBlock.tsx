import "./LecturesFullBlock.scss";
import db from "../../Common/Lectures.json";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function LecturesFullBlock(item: any) {
  console.log(item);
  const [id, setId] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  db.forEach((element: any) => {
    if (element.id == item.idLecture && id == "") {
      setId(element.id);
      setName(element.name);
      setDescription(element.description);
    }
  });
  return (
    <div className="lectures_full_block">
      <NavLink to="/lectures">
        <img className="back_img" src="/back.svg" alt="" />
        <h1>Лекции</h1>
      </NavLink>
      <img className="main_img" src={"/lectures/" + id + ".jpg"} alt="" />
      <h2>{name}</h2>
      <p className="">{description}</p>
    </div>
  );
}
