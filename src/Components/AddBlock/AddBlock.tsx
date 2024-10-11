import { useState } from "react";

import "./AddBlock.scss";

export default function AddBlock(item: any) {
  const [active, setActive] = useState<any>(item.class);

  return (
    <div
      className={active}
      onClick={() => {
        let newArr = item.days
        if (active == item.class) {
          let help = item.class + " active"
          setActive(help);
          newArr.push(item.item);
        } else {
          setActive(item.class);
          newArr = newArr.filter((newArr:any[]) => newArr !== item.item);
        }
        item.setDays(newArr)
      }}
    >
      <p>{item.item}</p>
    </div>
  );
}
