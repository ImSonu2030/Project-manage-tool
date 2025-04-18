import NewTasks from "./NewTasks";

export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section>
      <h2 className="font-medium text-stone-800 mb-4">Tasks</h2>
      <NewTasks onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="text-stone-900 mb-3">No Task yet.</p>
      )}
      {tasks.length > 0 && (
        <ul>
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-2">
              <span className="p-1">{task.text}</span>
              <button onClick={() => onDelete(task.id)} className="">
                <span className="material-icons text-red-500 scale-90 hover:scale-100 hover:text-red-700 transition-transform duration-150 ">
                  delete
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
