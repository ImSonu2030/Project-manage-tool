import { useState } from "react";

export default function NewTasks({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState('');

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }
  function handleClick(event) {
    if(enteredTask.trim()==='') {
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  }

  return (
    <div className="flex items-center gap-4 mb-4">
      <input
        type="text"
        className="w-5/6 px-2 py-1 rounded-sm border border-stone-300 focus:outline-none focus:border-stone-600 transition-colors duration-150 ease-in-out"
        placeholder="Enter Task"
        value={enteredTask}
        onChange={handleChange}
      />
      <button
        onClick={handleClick}
        className="w-1/6 px-2 py-1 rounded-sm font-medium text-stone-300 bg-stone-800 hover:text-stone-50 hover:bg-stone-950 transition-all duration-150"
      >
        Add Task
      </button>
    </div>
  );
}
