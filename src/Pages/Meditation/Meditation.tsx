import "./Meditation.scss";
import NavTherapys from '../../Components/NavTherapys/NavTherapys'
import db from '../../Common/Meditation.json'
import BlockMeditation from "../../Components/BlockMeditation/BlockMeditation";

export default function Meditation(setIdMeditation:any) {

  return (
    <div className="meditation grey">
      <NavTherapys></NavTherapys>
      <h1>Выбери медитацию</h1>
      <div className="meditation_components">
      {db.map((item: any) => (
          <BlockMeditation
          setIdMeditation={setIdMeditation.setIdMeditation}
            {...item}
            key={item.id}
          />
        ))}
        </div>
    </div>
  );
}
