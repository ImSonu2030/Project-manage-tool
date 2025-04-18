import Tasks from "./Tasks";

export default function SelectedProject({
  project,
  onRemove,
  onAddTask,
  onDeleteTask,
  onCancel,
}) {
  return (
    <div className="w-[35rem] sm: px-4 py-10">
      <div className="flex flex-row gap-40 border-b-2 border-black font-black text-lg">
        <h1>Project Details</h1>
        <p>{project.duedate}</p>
      </div>
      <div className="my-6 pb-6 flex flex-col gap-5 border-b-2 border-stone-300">
        <h2 className="font-medium">{project.title}</h2>
        <span className="border border-stone-300 rounded-md px-1 py-2">
          <code>{project.description}</code>
        </span>
        <Tasks
          tasks={project.tasks}
          onAdd={onAddTask}
          onDelete={onDeleteTask}
        />
      </div>
      <div className="flex flex-row gap-10 text-sm">
        <button
          onClick={() => onRemove()}
          className="w-1/6 border-solid border border-black text-stone-50 bg-red-500 hover:bg-red-600 py-1 rounded-md font-medium duration-100"
        >
          Remove
        </button>
        <button
          onClick={() => onCancel()}
          className="w-1/6 border-solid border border-black text-stone-950  hover:bg-stone-200 py-1 rounded-md font-medium duration-100"
        >
          Close
        </button>
      </div>
    </div>
  );
}
