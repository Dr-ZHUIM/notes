import { useDrop } from "react-dnd";
import { ItemType } from "../../dragTypes/types";
import "./index.css";

export default function Board(props) {
  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: ItemType.KNIGHT,
      collect: (monitor) => ({
        isOver: monitor.isOver(),
      }),
      drop: (item) => {
        props.handleDrop(item);
      },
    }),
    [props.state]
  );
  return (
    <div className="board" ref={drop}>
      DropBox{props.id}
      <br />
      {props.children}
    </div>
  );
}
