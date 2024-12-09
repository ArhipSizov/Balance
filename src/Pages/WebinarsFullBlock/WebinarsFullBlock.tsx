import "./WebinarsFullBlock.scss";
import db from "../../Common/Webinars.json";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function WebinarsFullBlock(item: any) {
  const [id, setId] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [cost, setCost] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);

  db.forEach((element: any) => {
    if (element.id == item.idWebinars && id == "") {
      setId(element.id);
      setName(element.name);
      setTime(element.time);
      setDescription(element.description);
      setCost(element.cost);
    }
  });
  return (
    <div className="webinars_full_block">
      {showModal && (
        <NavLink to="/webinars" className="show_modal">
          <h1>Опата успешна!</h1>
        </NavLink>
      )}
      <div className="footer_webinars">
        <div>
          <p>Стоимость</p>
          <p>{cost}</p>
        </div>
        <div onClick={() => setShowModal(true)} className="button second_color">
          <p>Оплатить</p>
        </div>
      </div>
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
