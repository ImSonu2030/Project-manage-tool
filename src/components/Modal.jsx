import { useEffect, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ ref, children, buttonCaption }) {
  console.log("Modal opened!");
  
  const dialogRef = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogRef.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog
      ref={dialogRef}
      className="border border-stone-300 backdrop:bg-stone-900/90 px-20 py-10 rounded-md flex flex-col items-center"
    >
      {children}
      <form method="dialog">
        <button className="mt-5 px-4 py-1 rounded-md font-semibold bg-stone-700 text-stone-200 hover:bg-stone-950 hover:text-stone-50 transition-all duration-200">
          {buttonCaption}
        </button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
}
