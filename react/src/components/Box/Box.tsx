import { useContext} from "react";
import {BoxContext} from "../../ShowBoxes"

function Ele() {
const contextValue = useContext(BoxContext);
  console.log("contextValue", contextValue);
  return <div>123</div>;
}

export default function Box() {
  return (
      <div className="boxcontext-child">
        <Ele />
      </div>
  );
}
