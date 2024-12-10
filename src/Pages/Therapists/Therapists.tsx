import "./Therapists.scss";
import NavTherapys from '../../Components/NavTherapys/NavTherapys'
import BlockTherapists from "../../Components/BlockTherapists/BlockTherapists"
import db from '../../Common/Therapists.json'

export default function Therapists(setIdTherapists:any) {
  console.log(setIdTherapists);
  
  return (
    <div className="therapists grey">
      <NavTherapys></NavTherapys>
      <h1>Терапевты</h1>
      <div className="block_therapists_all">
      {db.map((item: any) => (
          <BlockTherapists
          setIdTherapists={setIdTherapists.setIdTherapists}
            {...item}
            key={item.id}
          />
        ))}
        </div>
    </div>
  );
}
