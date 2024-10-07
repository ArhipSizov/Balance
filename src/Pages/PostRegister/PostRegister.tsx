import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./PostRegister.scss";

export default function PostRegister() {
  const [showReg1, setReg1] = useState<boolean>(true);
  const [showReg2, setReg2] = useState<boolean>(false);
  const [showReg3, setReg3] = useState<boolean>(false);
  const [showReg4, setReg4] = useState<boolean>(false);

  const navigate = useNavigate();

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
            <img
              className="telephone_11"
              src="/post_register/img01.png"
              alt=""
            />
            <img
              className="telephone_12"
              src="/post_register/img91.png"
              alt=""
            />
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
          <img className="bottom_img" src="/post_register/img22.png" alt="" />
          <div className="telephone">
            <img
              className="telephone_11"
              src="/post_register/img02.png"
              alt=""
            />
            <img
              className="telephone_13"
              src="/post_register/img92.png"
              alt=""
            />
          </div>
          <h1>Терапия</h1>
          <p>
            С помощью разных видов терапии вы сможете улучшить свою психическую
            устойчивость и благополучие. Также научитесь распознавать и решать
            проблемы.
          </p>
        </div>
      )}
      {showReg3 && (
        <div className="post_register_3">
          <img className="top_img" src="/post_register/img3.png" alt="" />
          <img className="telephone_14" src="/post_register/img03.png" alt="" />
          <h1>Статистика</h1>
          <p>
            Покажет вам реальную картину вашего эмоционального состояния и
            что приводит к возникновению тех или иных чувств.
          </p>
        </div>
      )}
      {showReg4 && (
        <div className="post_register_4">
          <img className="top_img" src="/post_register/img41.png" alt="" />
          <img className="bottom_img" src="/post_register/img42.png" alt="" />
          <h1>Советы</h1>
          <p>Делайте записи регулярно.</p>
          <p>
            Относитесь непредвзято, пишите всё, что вы на самом деле чувствуете
            и думаете.
          </p>
          <p>
            В «Заметки» вы можете выплеснуть всё, что накопилось и использовать
            как личный дневник.
          </p>
        </div>
      )}
    </div>
  );
}
