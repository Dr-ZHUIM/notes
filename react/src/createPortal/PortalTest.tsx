import { createPortal } from "react-dom";

const divStyle: React.CSSProperties = {
  border: "2px solid black",
};

export default function PortalTest() {
  const documentElement = createPortal(
    <p>This child will be rendered in the document body</p>,
    document.body
  );

  return (
    <div style={divStyle}>
      <p>This child will be rendered in the parent div</p>
      {documentElement}
    </div>
  );
}
