import { useState } from "react";
import { createPortal } from "react-dom";
import Modal from "./Modal";
export default function PortalExample() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <button onClick={() => setShowModal(() => true)}>
        Show modal using a portal
      </button>
      {showModal &&
        createPortal(
          <Modal onClose={() => setShowModal(false)} />,
          document.body
        )}
    </div>
  );
}

