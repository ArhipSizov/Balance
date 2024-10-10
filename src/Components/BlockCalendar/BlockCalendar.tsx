import "./BlockCalendar.scss";

export default function BlockCalendar(item: any) {
  if (item.item == "") {
    return <p></p>;
  }
  return (
    <div className="block_calendar">
      {(item.img && <p>1</p>) || <div className="nothing not_alt"></div>}
      <p>{item.item}</p>
    </div>
  );
}
