import React, { useState, useEffect, memo } from "react";

function PrototyeObject() {
  const [info1, setInfo1] = useState("");
  useEffect(() => {
    let obj = { name: "Tom" };
    let x = {};
    let y = {};
    setInfo1(obj.name);
    console.log("obj", obj);
    console.log(Object.getPrototypeOf(x) === Object.getPrototypeOf(y));
  }, []);
  return (
    <div>
      <div>{info1}</div>
    </div>
  );
}

export default memo(PrototyeObject);

