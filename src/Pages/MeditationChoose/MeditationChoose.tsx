import "./MeditationChoose.scss";
import db from "../../Common/Meditation.json";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import MeditationChooseBlock from "../../Components/MeditationChooseBlock/MeditationChooseBlock";

export default function MeditationChoose(i: any) {
  const [id, setId] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [newDb, setNewDb] = useState<any[]>([]);
  

  db.forEach((element: any) => {
    if (element.id == i.idMeditation && id == "") {
        setNewDb(element.music)
        setId(element.id);
        setName(element.name);
    }
  });

  return (
    <NavLink to="/meditation" className="meditation_choose">
      <img className="back_img" src="/back.svg" alt="" />
      <h1>{name}</h1>
    {newDb.map((item: any) => (
        <MeditationChooseBlock
          {...item}
          key={item.id}
        />
      ))}
    </NavLink>
  );
}
