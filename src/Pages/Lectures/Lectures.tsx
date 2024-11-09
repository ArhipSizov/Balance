import "./Lectures.scss";
import NavTherapys from '../../Components/NavTherapys/NavTherapys'
import LecturesBlock from '../../Components/LecturesBlock/LecturesBlock'
import db from '../../Common/Lectures.json'

export default function Lectures(setIdLecture:any) {
  return (
    <div className="lectures grey">
      <NavTherapys></NavTherapys>
      <h1>Лекции</h1>
      {db.map((item: any) => (
          <LecturesBlock
          setIdLecture={setIdLecture.setIdLecture}
            {...item}
            key={item.id}
            item={item}
          />
        ))}
    </div>
  );
}
