import { useState } from "react";
import ProjectSidebar from "./components/ProjectSidebar";
import NewProjectForm from "./components/NewProjectForm";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [
      {
        id: "1",
        title: "First Project",
        description: "some content to describe the project",
        duedate: "12/12/2024",
        tasks: [
          { id: "1", text: "Set up project repo" },
          { id: "2", text: "Define MVP scope" },
        ],
      },
      {
        id: "2",
        title: "Second Project",
        description: "some content to describe the project",
        duedate: "12/12/2024",
        tasks: [
          { id: "3", text: "Design UI mockups" },
          { id: "4", text: "Get client feedback" },
        ],
      },
      {
        id: "3",
        title: "Website Redesign",
        description: "Overhaul the company website with new branding elements",
        duedate: "05/15/2025",
        tasks: [
          { id: "5", text: "Audit current website" },
          { id: "6", text: "Create new wireframes" },
          { id: "7", text: "Implement new color scheme" },
        ],
      },
      {
        id: "4",
        title: "Mobile App Development",
        description: "Create iOS and Android versions of our customer portal",
        duedate: "08/30/2025",
        tasks: [
          { id: "8", text: "Define API endpoints" },
          { id: "9", text: "Build login screen" },
          { id: "10", text: "Test on multiple devices" },
        ],
      },
      {
        id: "5",
        title: "Marketing Campaign",
        description: "Q3 social media and email marketing initiative",
        duedate: "07/01/2025",
        tasks: [
          { id: "11", text: "Write campaign content" },
          { id: "12", text: "Schedule social posts" },
          { id: "13", text: "Track campaign analytics" },
        ],
      },
    ],
  });
  function handleAddTask(tasktext) {
    setProjectState((prevStat) => {
      const newTask = {
        id: Math.floor(Math.random() * 100000) + 1,
        text: tasktext,
      };
      const updatedProjects = prevStat.projects.map((project) => {
        if (project.id === prevStat.selectedProjectId) {
          return {
            ...project,
            tasks: [newTask, ...project.tasks],
          };
        }
        return project;
      });
      return {
        ...prevStat,
        projects: updatedProjects,
      };
    });
  }
  function handleDeleteTask(taskId) {
    setProjectState((prevStat) => {
      const updatedProjects = prevStat.projects.map((project) => {
        if (project.id === prevStat.selectedProjectId) {
          return {
            ...project,
            tasks: project.tasks.filter((task) => task.id != taskId),
          };
        }
        return project;
      });
      return {
        ...prevStat,
        projects: updatedProjects,
      };
    });
  }
  function handleStartProject() {
    setProjectState((prevStat) => {
      return {
        ...prevStat,
        selectedProjectId: null,
      };
    });
  }
  function handleAddedProject(projectData) {
    setProjectState((prevStat) => {
      const newProject = {
        ...projectData,
        id: Math.floor(Math.random() * 100000) + 1,
        tasks: [],
      };
      return {
        ...prevStat,
        selectedProjectId: undefined,
        projects: [...prevStat.projects, newProject],
      };
    });
  }
  function handleCancel() {
    setProjectState((prevStat) => {
      return {
        ...prevStat,
        selectedProjectId: undefined,
      };
    });
  }
  function handleRemoveProject() {
    setProjectState((prevStat) => {
      return {
        ...prevStat,
        projects: prevStat.projects.filter(
          (project) => project.id != prevStat.selectedProjectId
        ),
        selectedProjectId: undefined,
      };
    });
  }
  function handleSelectedProject(projectID) {
    setProjectState((prevStat) => {
      return {
        ...prevStat,
        selectedProjectId: projectID,
      };
    });
  }

  let content;
  if (projectState.selectedProjectId === null) {
    content = (
      <NewProjectForm onAdd={handleAddedProject} onCancel={handleCancel} />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onAddProject={() => handleStartProject} />;
  } else {
    content = (
      <SelectedProject
        project={projectState.projects.find(
          (project) => project.id === projectState.selectedProjectId
        )}
        onRemove={handleRemoveProject}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        onCancel={handleCancel}
      />
    );
  }
  return (
    <main className="h-screen flex gap-8">
      <ProjectSidebar
        onAddProject={() => handleStartProject}
        projects={projectState.projects}
        onSelectProject={handleSelectedProject}
        selectedProjectID={projectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
