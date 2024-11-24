import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ref, update } from "firebase/database";
import { database } from "../../Services/store/index";

import db from "./mood.json";
import AddBlock from "../../Components/AddBlock/AddBlock";
import MoodImgBlock from "../../Components/MoodImgBlock/MoodImgBlock";

import "./Add.scss";

export default function Add() {
  const [date] = useState<any>(new Date());
  const [moodDb] = useState<any>(db.mood);
  const [mood, setMood] = useState<any[]>([]);
  const [work, setWork] = useState<any[]>([]);
  const [description, setDescription] = useState<string>("");
  const [error, setError] = useState<string>("none");
  const [moodImg, setMoodImg] = useState<string>("none");
  const [key, setKey] = useState("");

  const [monthName] = useState<string>(
    date.toLocaleString("default", { month: "long" })
  );

  const navigate = useNavigate();
  const userArr = useSelector((state: any) => state.user.user);
  if (key == "") {
    userArr.forEach((element: any) => {
      setKey(element.key);
    });
  }
  function updateDatabase() {
    if (mood.length !== 0 && work.length !== 0 && moodImg !== "none") {
      const updates: any = {};

      const postData = {
        mood: mood,
        mood_img: moodImg,
        work: work,
        description: description,
      };

      updates["/users/" + key + "/mood/" + date] = postData;
      navigate("/profile");
      return update(ref(database), updates);
    } else {
      setError("error_p");
      setTimeout(() => {
        setError("none");
      }, 4000);
    }
  }
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
        {db.mood_img.map((item: any) => (
          <MoodImgBlock
            setMoodImg={setMoodImg}
            moodImg={moodImg}
            {...item}
            key={item.id}
            item={item}
          />
        ))}
      </div>
      <h1>Что ты чувствовал/а?</h1>
      <h2 className="grey_p">
        Выбери наиболее подходящие эмоции под твои чувства
      </h2>
      <div className="blocks_mood not_alt">
        <div className="block_wt_moods">
          {moodDb.best.map((item: any) => (
            <AddBlock
              setDays={setMood}
              days={mood}
              {...item}
              key={item.id}
              item={item}
              class="best"
            />
          ))}
        </div>
        <div className="block_wt_moods">
          {moodDb.good.map((item: any) => (
            <AddBlock
              setDays={setMood}
              days={mood}
              {...item}
              key={item.id}
              item={item}
              class="good"
            />
          ))}
        </div>
        <div className="block_wt_moods">
          {moodDb.norm.map((item: any) => (
            <AddBlock
              setDays={setMood}
              days={mood}
              {...item}
              key={item.id}
              item={item}
              class="norm"
            />
          ))}
        </div>
        <div className="block_wt_moods">
          {moodDb.bad.map((item: any) => (
            <AddBlock
              setDays={setMood}
              days={mood}
              {...item}
              key={item.id}
              item={item}
              class="bad"
            />
          ))}
        </div>
        <div className="block_wt_moods">
          {moodDb.angry.map((item: any) => (
            <AddBlock
              setDays={setMood}
              days={mood}
              {...item}
              key={item.id}
              item={item}
              class="angry"
            />
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
            <AddBlock
              setDays={setWork}
              days={work}
              {...item}
              key={item.id}
              item={item}
              class="work"
            />
          ))}
        </div>
      </div>
      <h1>Заметки</h1>
      <h2 className="grey_p">Поделись своими чувствами и мыслями</h2>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <p className={error}>Пожалуйста, выберите чувство и занятие</p>
      <div
        onClick={() => updateDatabase()}
        className="add_mood_but second_color"
      >
        <p>Сохранить</p>
      </div>
    </div>
  );
}
