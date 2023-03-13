import { FC, ReactNode } from "react";

const Modal: FC<{ onClose: any; children?: ReactNode }> = ({ onClose }) => {
  return (
    <div className="modal">
      <div>I'm a modal dialog</div>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Modal;

