import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, onValue } from "firebase/database";
import { useDispatch } from "react-redux";
import { addUser } from "../Services/store/Slice";

import {
  Register,
  Login,
  Error,
  Loading,
  PreRegister,
  PostRegister,
  Footer,
  Profile,
  Help,
  Add,
  EditingProfile,
  Calendar,
  Qwestion,
  Meditation,
  Lectures,
  Therapists,
  Webinars,
  LecturesFullBlock,
  MeditationChoose,
  WebinarsFullBlock,
  TherapistsFullBlock,
  Player
} from "./index.ts";

import "./App.scss";

function App() {
  const [showNavFooter, setShowNavFooter] = useState<boolean>(false);
  const [email, setIEmail] = useState<string>("");
  const [idLecture, setIdLecture] = useState<string>("");
  const [idMeditation, setIdMeditation] = useState<string>("");
  const [idMusic, setIdMusic] = useState<string>("");
  const [idWebinars, setIdWebinars] = useState<string>("");
  const [idTherapists, setIdTherapists] = useState<string>("");

  const auth = getAuth();
  const navigate = useNavigate();

  
  function getCookie(name:string) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : "dark";
  }
  const [theme] = useState<any>(getCookie("theme")); //lite  dark
  
  let data = null;
  const database = getDatabase();
  const starCountRef = ref(database);
  onValue(starCountRef, (snapshot) => {
    data = snapshot.val();
  });

  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        setShowNavFooter(false);
        navigate("/pre_register");
        return;
      }
      setShowNavFooter(true);
      onValue(starCountRef, (snapshot) => {
        data = snapshot.val();
        const dataArr = Object.values(data.users);
        dataArr.forEach(function (item: any) {
          const dataEmail = item.email;
          if (currentUser.email == dataEmail && email == "") {
            setIEmail(item.email);
            dispatch(
              addUser({
                email: item.email,
                pasvord: item.password,
                name: item.name,
                age: item.age,
                family: item.family,
                key: item.key,
                work: item.work
              })
            );
          }
        });
      });
    });
  }, []);

  if (!email && showNavFooter == true) {
    return (
      <div className="loading">
        <img src="/loading.png" alt="" />
        <p>Загрузка...</p>
      </div>
    );
  }

  return (
    <div className={theme}>
      <Routes>Player
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pre_register" element={<PreRegister />} />
        <Route path="/post_register" element={<PostRegister />} />
        <Route path="/editing_profile" element={<EditingProfile />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/qwestion" element={<Qwestion />} />
        <Route path="/meditation" element={<Meditation setIdMeditation={setIdMeditation}/>} />
        <Route path="/meditationchoose" element={<MeditationChoose setIdMusic={setIdMusic} idMeditation={idMeditation}/>} />
        <Route path="/player" element={<Player idPlayer={idMusic} idMeditation={idMeditation}/>} />
        <Route path="/lectures" element={<Lectures setIdLecture={setIdLecture}/>} />
        <Route path="/lecturesfullblock" element={<LecturesFullBlock idLecture={idLecture}/>} />
        <Route path="/therapists" element={<Therapists setIdTherapists={setIdTherapists}/>} />
        <Route path="/therapistsFullBlock" element={<TherapistsFullBlock idTherapists={idTherapists}/>} />
        <Route path="/webinars" element={<Webinars setIdWebinars={setIdWebinars}/>} />
        <Route path="/webinarsfullblock" element={<WebinarsFullBlock idWebinars={idWebinars}/>} />
        <Route path="/help" element={<Help />} />
        <Route path="/add" element={<Add />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {showNavFooter && <Footer />}
    </div>
  );
}

export default App;
