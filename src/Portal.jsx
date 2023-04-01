import { useRef, useEffect, useState, ReactNode } from "react";
import { createPortal } from "react-dom";

const Portal = (props) => {
  const ref = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.getElementById("portal");
    setMounted(true);
  }, []);

  return mounted && ref.current
    ? createPortal(
        <div
          onClick={() => props.setShowModal(false)}
          className="fixed left-0 top-0 w-full h-full overflow-y-auto bg-black opacity-20 "
          style={{ zIndex: 101001010 }}
        >
          {props.children}
        </div>,
        ref.current
      )
    : null;
};

export default Portal;
