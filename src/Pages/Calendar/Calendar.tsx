import { useState } from "react";

import BlockCalendar from "../../Components/BlockCalendar/BlockCalendar";

import "./Calendar.scss";

export default function Calendar() {
  const [date, setDay] = useState<any>(new Date());
  const [dateArr, setDateArr] = useState<any>([]);
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
      console.log(date.getDay());
      }
  }
  for (let i = 0; i < date.getDay() - 1; i++) {
  newArr.push("");
  console.log(date.getDay());
  }
  console.log(newArr);

  return (
    <div className="calendar grey">
      <div>
        <h1>{date.toLocaleString("default", { month: "long" })}</h1>
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
      ))}</div>
    </div>
  );
}
