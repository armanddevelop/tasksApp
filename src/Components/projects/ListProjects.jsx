import { useContext, useEffect } from "react";
import ProjectContext from "../../Context/projects/projectContext";
import TaskContext from "../../Context/projects/task/taskContext";
import Project from "./Project";
const ListProjects = () => {
  //extraer projectos de state inicial
  const projectsContext = useContext(ProjectContext);
  const taskContext = useContext(TaskContext);
  const { projects, getProjectsList, setCurrentProject } = projectsContext;
  const { getTasksListByCurrentProject } = taskContext;
  //revisar si projects tiene proyectos
  //if (projects.length === 0) return null;
  useEffect(() => {
    getProjectsList();
  }, []);
  return (
    <ul className="listado-proyectos">
      {projects.map((project) => (
        <Project
          key={project.id}
          projectInfo={project}
          setCurrentProject={setCurrentProject}
          getTasksListByCurrentProject={getTasksListByCurrentProject}
        />
      ))}
    </ul>
  );
};

export default ListProjects;
