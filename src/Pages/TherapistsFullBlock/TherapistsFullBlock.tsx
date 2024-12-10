import "./TherapistsFullBlock.scss";
import db from "../../Common/Therapists.json";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function TherapistsFullBlock(item: any) {
  const [id, setId] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [cost, setCost] = useState<string>("");
  const [long, setLong] = useState<string>("");
  const [rating, setRating] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [experience, setExperience] = useState<string>("");
  const [methods, setMethods] = useState<any[]>([]);
  const [work, setWork] = useState<any[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);

  db.forEach((element: any) => {
    if (element.id == item.idTherapists && id == "") {
      console.log(element);
      setId(element.id);
      setName(element.name);
      setDescription(element.description);
      setCost(element.cost);
      setLong(element.long);
      setRating(element.rating);
      setType(element.type);
      setExperience(element.experience);
      setMethods(element.methods);
      setWork(element.work);
    }
  });
  return (
    <div className="therapists_full_block grey">
    {showModal && (
      <NavLink to="/therapists" className="show_modal">
        <h1>Запись успешна!</h1>
      </NavLink>
    )}
      <div onClick={() => setShowModal(true)} className="button second_color">
        <p>Записаться</p>
      </div>
      <NavLink to="/therapists" className="therapists_nav">
        <img src="/back.svg" alt="" />
      </NavLink>
      <img className="logo" src={"/therapists/" + id + ".png"} alt="" />
      <div className="main_therapists_full_block">
        <h1>{name}</h1>
        <div className="experience_type">
          <p className="not_alt">Опыт {experience} г</p>
          <p className="not_alt">{type}</p>
        </div>
        <p>{"Сессия " + long + " минут, " + cost + "$"}</p>
        <div className="rating">
          <p>{rating}</p>
          <img src="/therapists/star.svg" alt="" />
        </div>
      </div>
      <div className="description not_alt">
        <h1>О себе</h1>
        <p>{description}</p>
        <h2>Работаю с:</h2>
        {work.map((item: string) => (
          <li>{item}</li>
        ))}
        <h2>Принципы работы:</h2>
        {methods.map((item: string) => (
          <li>{item}</li>
        ))}
      </div>
    </div>
  );
}
