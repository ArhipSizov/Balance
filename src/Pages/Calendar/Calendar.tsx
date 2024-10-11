import { useEffect, useState } from "react";

import BlockCalendar from "../../Components/BlockCalendar/BlockCalendar";

import "./Calendar.scss";

export default function Calendar() {
  const [date] = useState<any>(new Date());
  const [help, setHelp] = useState<any>(0);
  let i = date.getDate();
  let newArr = [];
  do {
    date.setDate(date.getDate() - 1);
    i--;
    newArr.push(i + 1);
  } while (i > 1);
  newArr.push(1);
  if (date.getDay() == 0) {
    for (let i = 0; i < 6; i++) {
      newArr.push("");
    }
  }
  for (let i = 0; i < date.getDay() - 1; i++) {
    newArr.push("");
  }
  useEffect(() => {}, [help]);

  return (
    <div className="calendar grey">
      <div className="nav">
        <img
          className="back"
          onClick={() => {
            setHelp(help + 1);
          }}
          src="/back.svg"
          alt=""
        />
        <h1>{date.toLocaleString("default", { month: "long" })}</h1>
        <img
          className="up"
          onClick={() => {
            setHelp(help + 1);
            date.setMonth(date.getMonth() + 2);
          }}
          src="/back.svg"
          alt=""
        />
      </div>
      <div className="calendar_days">
        <p className="block_week">Пн</p>
        <p className="block_week">Вт</p>
        <p className="block_week">Ср</p>
        <p className="block_week">Чт</p>
        <p className="block_week">Пт</p>
        <p className="block_week">Сб</p>
        <p className="block_week">Вс</p>
        {newArr.reverse().map((item) => (
          <BlockCalendar item={item} {...item} key={item}></BlockCalendar>
        ))}
      </div>
    </div>
  );
}
