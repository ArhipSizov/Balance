import "./Webinars.scss";
import NavTherapys from '../../Components/NavTherapys/NavTherapys'
import db from '../../Common/Webinars.json'
import BlockWebinar from "../../Components/BlockWebinar/BlockWebinar";

export default function Webinars(setIdWebinars:any) {
  
  return (
    <div className="webinars  grey">
      <NavTherapys></NavTherapys>
      <h1>Live вебинары</h1>
      <div className="webinars_components">
      {db.map((item: any) => (
          <BlockWebinar
          setIdWebinars={setIdWebinars.setIdWebinars}
            {...item}
            key={item.id}
          />
        ))}
        </div>
    </div>
  );
}
