import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./PostRegister.scss";

export default function PostRegister() {
  const [showReg1, setReg1] = useState<boolean>(true);
  const [showReg2, setReg2] = useState<boolean>(false);
  const [showReg3, setReg3] = useState<boolean>(false);
  const [showReg4, setReg4] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    console.log(12);
  }, []);

  function next() {
    if (showReg1 == true) {
      setReg1(false);
      setReg2(true);
    } else if (showReg2 == true) {
      setReg2(false);
      setReg3(true);
    } else if (showReg3 == true) {
      setReg3(false);
      setReg4(true);
    } else {
      navigate("/");
    }
  }

  return (
    <div className="post_register" onClick={() => next()}>
      {showReg1 && (
        <div className="post_register_1">
          <img className="top_img" src="/post_register/img1.png" alt="" />
          <div className="telephone">
            <img className="telephone_11" src="/post_register/img01.png" alt="" />
            <img className="telephone_12" src="/post_register/img91.png" alt="" />
          </div>
          <h1>Отслеживайте свои эмоции</h1>
          <p>
            Отмечайте в дневнике ваше настроение, чем вы занимались
            и что чувствовали в тот момент
          </p>
        </div>
      )}
      {showReg2 && (
        <div className="post_register_2">
          <img className="top_img" src="/post_register/img21.png" alt="" />
          <img src="/post_register/img22.png" alt="" />
          <div>
            <img src="/post_register/img02.png" alt="" />
            <img src="/post_register/img92.png" alt="" />
          </div>
          <h1>Отслеживайте свои эмоции</h1>
          <p>
            Отмечайте в дневнике ваше настроение, чем вы занимались
            и что чувствовали в тот момент
          </p>
        </div>
      )}
      {showReg3 && (
        <div className="post_register_3">
          <img className="top_img" src="/post_register/img3.png" alt="" />
          <img src="/post_register/img03.png" alt="" />
          <h1>Отслеживайте свои эмоции</h1>
          <p>
            Отмечайте в дневнике ваше настроение, чем вы занимались
            и что чувствовали в тот момент
          </p>
        </div>
      )}
      {showReg4 && (
        <div className="post_register_4">
          <img className="top_img" src="/post_register/img41.png" alt="" />
          <img src="/post_register/img42.png" alt="" />
          <h1>Отслеживайте свои эмоции</h1>
          <p>
            Отмечайте в дневнике ваше настроение, чем вы занимались
            и что чувствовали в тот момент
          </p>
        </div>
      )}
      <div className="footer_reg">
        <div className=""></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
