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
} from "./index.ts";

import "./App.scss";

function App() {
  const [theme] = useState<string>("dark"); //lite
  const [showNavFooter, setShowNavFooter] = useState<boolean>(false);
  const [email, setIEmail] = useState<string>("");

  const auth = getAuth();
  const navigate = useNavigate();

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
                number: item.number,
                key: item.key,
                favorites: item.favorites,
                card: item.card,
                rooms: item.rooms,
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
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pre_register" element={<PreRegister />} />
        <Route path="/post_register" element={<PostRegister />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {showNavFooter && <Footer />}
    </div>
  );
}

export default App;
