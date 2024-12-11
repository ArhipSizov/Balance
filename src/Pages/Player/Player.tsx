import "./Player.scss";
import { useEffect, useState } from "react";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi"; 
import { IconContext } from "react-icons";
import db from "../../Common/Meditation.json";
import useSound from "use-sound";

export default function Player({idPlayer, idMeditation}:any) {
  const [currTime, setCurrTime] = useState({
    min: "",
    sec: "",
  }); 
  const [allTime, setAllTime] = useState({
    min: "",
    sec: "",
  }); 

  const [seconds, setSeconds] = useState(); 
  const [isPlaying, setIsPlaying] = useState(false);
  const [img, setImg] = useState<string>("/logo.png");
  const [newDb, setNewDb] = useState<any>(null);
  const [play, { pause, duration, sound }] = useSound<any>(newDb);
  
  
  
  db.forEach((element: any) => {
    if (element.id == idMeditation && newDb == null) {
      console.log(element);
      element.music.forEach((element: any) => {
        console.log(element);
        setNewDb(element.music);
        setImg(element.img)
      });
    }
  });

  const playingButton = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([]));
        const min:any = Math.floor(sound.seek([]) / 60);
        const sec:any = Math.floor(sound.seek([]) % 60);
        setCurrTime({
          min,
          sec,
        });
      }
      const secTrye:any = duration / 1000;
      const min:any = Math.floor(secTrye / 60);
      const sec:any = Math.floor(secTrye % 60);
      setAllTime({
        min,
        sec,
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);
  
  return (
    <div className="component grey">
      <h1>Playing Now</h1>
      <img className="musicCover" src={img} />
      <div>
        <h2 className="title">Rubaiyyan</h2>
      </div>
      <div className="player_play">
        <button className="playButton">
          <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
            <BiSkipPrevious />
          </IconContext.Provider>
        </button>
        {!isPlaying ? (
          <button className="playButton" onClick={playingButton}>
            <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
              <AiFillPlayCircle />
            </IconContext.Provider>
          </button>
        ) : (
          <button className="playButton" onClick={playingButton}>
            <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
              <AiFillPauseCircle />
            </IconContext.Provider>
          </button>
        )}
        <button className="playButton">
          <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
            <BiSkipNext />
          </IconContext.Provider>
        </button>
      </div>
      <div>
        <div className="time">
          <p>
            {currTime.min}:{currTime.sec}
          </p>
          <p>
            {allTime.min}:{allTime.sec}
          </p>
        </div>
        <input
          type="range"
          min="0"
          max={duration / 1000}
          default="0"
          value={seconds}
          className="timeline"
          onChange={(e) => {
            sound.seek([e.target.value]);
          }}
        />
      </div>
    </div>
  );
}
