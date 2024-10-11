import { useState } from "react";

import "./MoodImgBlock.scss";

export default function MoodImgBlock(item: any) {
  const [mood, setMood] = useState<any>("mood");
  const img = "/mood/" + item.item[0] + ".png";
  console.log(item.item[0]);

  setTimeout(() => {
    if (item.moodImg == item.item[0]) {
      setMood("active_mood mood grey");
      console.log(12);
    } else {
      setMood("mood");
    }
  }, 1);

  return (
    <div className={mood} onClick={() => item.setMoodImg(item.item[0])}>
      <img src={img} alt="" />
      <p>{item.item[1]}</p>
    </div>
  );
}
