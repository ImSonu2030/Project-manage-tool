import Addbutton from "./Addbutton";

export default function ProjectSidebar({
  onAddProject,
  projects,
  onSelectProject,
  selectedProjectID,
}) {
  return (
    <aside className="w-1/3  px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-tr-lg">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        My Projects
      </h2>
      <div>
        <Addbutton onClickOpenForm={onAddProject}>+ Add Projects</Addbutton>
      </div>
      <ul className="mt-4">
        {projects.map((project) => {
          let css = "w-full text-left px-2 py-1 rounded-sm my-1 font-medium ";

          if (project.id === selectedProjectID) {
            css += " bg-sky-600 text-stone-950";
          } else {
            css +=
              " text-stone-300 hover:text-stone-50 hover:bg-stone-600 duration-150 transition-all ease-in-out";
          }

          return (
            <li key={project.id}>
              <button
                onClick={() => onSelectProject(project.id)}
                className={css}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
