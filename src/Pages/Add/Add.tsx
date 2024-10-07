import { useState } from "react";
import db from "../../Common/db.json";
import AddBlock from "../../Components/AddBlock/AddBlock";

import "./Add.scss";

export default function Add() {
  const [date] = useState<any>(new Date());
  const [moodDb] = useState<any>(db.mood);
  const [monthName] = useState<string>(
    date.toLocaleString("default", { month: "long" })
  );

  return (
    <div className="add grey">
      <div className="add_nav not_alt">
        <img className="img" src="/back.svg" alt="" />
        <img className="img_alt" src="/back_alt.svg" alt="" />
        <p>
          Сегодня, {date.getDate()} {monthName}
        </p>
      </div>
      <h1>Как твое настроение?</h1>
      <div className="all_moods not_alt">
        <div className="mood">
          <img src="/mood/best.png" alt="" />
          <p>Супер</p>
        </div>
        <div className="mood">
          <img src="/mood/good.png" alt="" />
          <p>Хорошо</p>
        </div>
        <div className="mood">
          <img src="/mood/norm.png" alt="" />
          <p>Норма</p>
        </div>
        <div className="mood">
          <img src="/mood/bad.png" alt="" />
          <p>Плохо</p>
        </div>
        <div className="mood">
          <img src="/mood/angry.png" alt="" />
          <p>Ужасно</p>
        </div>
      </div>
      <h1>Что ты чувствовал/а?</h1>
      <h2 className="grey_p">
        Выбери наиболее подходящие эмоции под твои чувства
      </h2>
      <div className="blocks_mood not_alt">
        <div className="block_wt_moods">
          {moodDb.best.map((item: any) => (
            <AddBlock {...item} key={item.id} item={item} class="best" />
          ))}
        </div>
        <div className="block_wt_moods">
          {moodDb.good.map((item: any) => (
            <AddBlock {...item} key={item.id} item={item} class="good" />
          ))}
        </div>
        <div className="block_wt_moods">
          {moodDb.norm.map((item: any) => (
            <AddBlock {...item} key={item.id} item={item} class="norm" />
          ))}
        </div>
        <div className="block_wt_moods">
          {moodDb.bad.map((item: any) => (
            <AddBlock {...item} key={item.id} item={item} class="bad" />
          ))}
        </div>
        <div className="block_wt_moods">
          {moodDb.angry.map((item: any) => (
            <AddBlock {...item} key={item.id} item={item} class="angry" />
          ))}
        </div>
      </div>
      <h1>Чем ты занимался/ась?</h1>
      <h2 className="grey_p">
        Выбери, как ты проводил/а время или с кем находилась
      </h2>
      <div className="blocks_mood not_alt">
        <div className="block_work ">
          {db.work.map((item: any) => (
            <AddBlock {...item} key={item.id} item={item} class="work" />
          ))}
        </div>
      </div>
      <h1>Заметки</h1>
      <h2 className="grey_p">Поделись своими чувствами и мыслями</h2>
      <textarea></textarea>
      <div className="add_mood_but second_color">
        <p>Сохранить</p>
      </div>
    </div>
  );
}
