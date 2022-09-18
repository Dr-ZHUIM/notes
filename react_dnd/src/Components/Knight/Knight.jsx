import { useDrag } from "react-dnd";
import { ItemType } from "../../dragTypes/types";
import "./index.css"
export default function Knight(props) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemType.KNIGHT,
    item: {id:props.id},
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));
  return (
    <div
      ref={drag}
      className="box"
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: "bold",
      }}
    >
      box{props.id}
    </div>
  );
}
