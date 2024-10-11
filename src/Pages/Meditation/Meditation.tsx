import "./Meditation.scss";

export default function Meditation() {
  return (
    <div className="meditation">
      <p className="nav_p_meditation">Терапия</p>
      <div className="meditation_nav_all">
        <div className="meditation_nav">
          <div className="third_color meditation_nav_block">
            <p className="third_color_p">Лекции</p>
          </div>
          <div className="third_color meditation_nav_block">
            <p className="third_color_p">Медитации</p>
          </div>
          <div className="third_color meditation_nav_block">
            <p className="third_color_p">Терапевты</p>
          </div>
          <div className="third_color meditation_nav_block">
            <p className="third_color_p">Live вебинары</p>
          </div>
        </div>
      </div>
    </div>
  );
}
