import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useState } from "react";
import "./assets/common.css";
import Board from "./Components/Board/Board";
import Knight from "./Components/Knight/Knight";

function App() {
  const [dragBox0, setDragBox0] = useState([
    {
      id: 0,
    },
    {
      id: 1,
    },
    {
      id: 2,
    },
  ]);
  const [dragBox1, setDragBox1] = useState([
    {
      id: 3,
    },
  ]);

  const handleBox0 = (item) => {
    console.log(11);
    //remove
    const copyArr = [...dragBox1];
    const index = copyArr.findIndex(ele=>ele.id === item.id);
    const copyItem = copyArr[index];
    copyArr.splice(index,1);
    setDragBox1([...copyArr]);
    //add
    setDragBox0(prev=>[...prev,copyItem])
  };

  const handleBox1 = (item) => {
    console.log('item',item)
    //remove
    const copyArr = [...dragBox0];
    const index = copyArr.findIndex(ele=>ele.id === item.id);
    const copyItem = copyArr[index];
    copyArr.splice(index,1);
    setDragBox0([...copyArr]);
    //add
    setDragBox1(prev=>[...prev,copyItem])
  };
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app">
        <Board id={0} state={dragBox0} handleDrop={handleBox0}>
          {dragBox0.map((box) => {
            return <Knight id={box.id} key={box.id} />;
          })}
        </Board>
        <Board id={1} state={dragBox1} handleDrop={handleBox1}>
          {dragBox1.map((box) => {
            return <Knight id={box.id} key={box.id} />;
          })}
        </Board>
      </div>
    </DndProvider>
  );
}

export default App;
