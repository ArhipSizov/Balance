import "./AddBlock.scss";

export default function AddBlock(item:any) {
  return (
    <div className={item.class}>
      <p>{item.item}</p>
    </div>
  );
}
