import { useContext, useEffect } from "react";
import ProjectContext from "../../Context/projects/projectContext";
import TaskContext from "../../Context/projects/task/taskContext";
import Project from "./Project";
import { CSSTransition, TransitionGroup } from "react-transition-group";
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
    //eslint-disable-next-line
  }, []);
  return (
    <ul className="listado-proyectos">
      <TransitionGroup>
        {projects.map((project) => (
          <CSSTransition key={project.id} timeout={200} classNames="tarea">
            <Project
              projectInfo={project}
              setCurrentProject={setCurrentProject}
              getTasksListByCurrentProject={getTasksListByCurrentProject}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ListProjects;
