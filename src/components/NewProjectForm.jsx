import Input from "./Input";
import { useRef } from "react";
import Modal from "./Modal";

export default function NewProjectForm({ onAdd,onCancel }) {
  const modalRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const duedateRef = useRef();

  function handleSave() {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = duedateRef.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      console.log("modal triggered after handle save button pressed")
      modalRef.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      duedate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modalRef} buttonCaption="Okay">
        <h2>Invalid Input!</h2>
        <p>Please enter a valid input</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <div>
          <Input ref={titleRef} label="Title" type="text" />
          <Input ref={descriptionRef} label="Description" textarea={true} />
          <Input ref={duedateRef} label="Due Date" type="date" />
        </div>
        <menu className="flex items-center justify-left gap-10 mt-10 ">
          <li>
            <button
              onClick={handleSave}
              className="bg-black px-4 text-stone-300 hover:text-stone-50  py-2 rounded-md font-medium duration-150 ease-out"
            >
              Save
            </button>
          </li>
          <li>
            <button onClick={onCancel} className="border-solid border border-black hover:bg-red-500 hover:text-stone-50 px-3 py-2 rounded-md font-medium duration-150 ease-out">
              Cancel
            </button>
          </li>
        </menu>
      </div>
    </>
  );
}
