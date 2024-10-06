import "./AddBlock.scss";

export default function AddBlock(item:any) {
    console.log(item);
    
  return (
    <div className={item.class}>
      <p>{item.item}</p>
    </div>
  );
}
