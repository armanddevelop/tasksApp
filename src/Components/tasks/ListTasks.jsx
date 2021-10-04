import { useContext, useEffect } from "react";
import ProjectContext from "../../Context/projects/projectContext";
import TaskContext from "../../Context/projects/task/taskContext";
import Task from "./Task";
const ListTasks = () => {
  //extraer projectos de state inicial
  const projectsContext = useContext(ProjectContext);
  const tasksContext = useContext(TaskContext);
  const { currentProject, deleteProject, deleteProjectFlag } = projectsContext;
  const { getTaskList, tasksByProject } = tasksContext;
  const [obj] = currentProject;
  const buttonDeleteProject = (
    <button
      type="button"
      className="btn btn-eliminar"
      onClick={() => deleteProject(obj.id)}
    >
      Eliminar proyecto &times;
    </button>
  );
  useEffect(() => {
    getTaskList();
  }, []);
  return (
    <>
      {currentProject.length !== 0 && !deleteProjectFlag ? (
        <h2>{`Proyecto: ${currentProject.map((project) => project.name)}`}</h2>
      ) : (
        <h2>Selecciona un proyecto</h2>
      )}
      {currentProject.length !== 0 && !deleteProjectFlag && (
        <>
          <ul>
            {tasksByProject.length === 0 ? (
              <li className="tareas">
                <p>No hay tareas</p>
              </li>
            ) : (
              tasksByProject.map((task) => (
                <Task key={task.id} tasksByProject={tasksByProject} />
              ))
            )}
          </ul>
          {tasksByProject.length !== 0 ? buttonDeleteProject : null}
        </>
      )}
    </>
  );
};

export default ListTasks;
