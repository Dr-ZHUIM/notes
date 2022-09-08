import React, { CSSProperties,memo } from 'react';
import "./index.css"
function Boxes(props:{ boxes:any }) {
  return (
    <div className="boxes-wrapper">
      {props.boxes.map((boxStyles:CSSProperties, index:number) => (
        <div
          key={index}
          className="box"
          style={boxStyles}
        />
      ))}
    </div>
  );
}

export default memo(Boxes);