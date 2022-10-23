import { Sandpack } from "@codesandbox/sandpack-react";
import { nightOwl } from "@codesandbox/sandpack-themes";

export default function Playground() {
  const file = {
    "App.js": `import React from "react";
export default function App (){
  const [num,setNum] = React.useState(0);
  return (
    <>
      <div>Your Number is : {num}</div>
      <div><button onClick={e=>setNum(v => v + 1)}>add 1</button></div>
    </>
  )
}
    `,
  };
  return (
    <>
      Playground
      <Sandpack template="react" theme={nightOwl} files={file} />
    </>
  );
}
