import { useContext, useEffect } from "react";
import ProjectContext from "../../Context/projects/projectContext";
import TaskContext from "../../Context/projects/task/taskContext";
import Task from "./Task";
const ListTasks = () => {
  //extraer projectos de state inicial
  const projectsContext = useContext(ProjectContext);
  const tasksContext = useContext(TaskContext);
  const { currentProject, deleteProject, deleteProjectFlag } = projectsContext;
  const {
    getTaskList,
    tasksByProject,
    deleteTaskById,
    getTasksListByCurrentProject,
    stateTask,
    currentTask,
    selectTaskState,
    returnToAddTask,
  } = tasksContext;
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
  const buttonReturnAddTask = (
    <button
      type="button"
      className="btn btn-eliminar"
      onClick={() => returnToAddTask()}
    >
      Regresar a agregar tarea
    </button>
  );
  useEffect(() => {
    getTaskList();
    //eslint-disable-next-line
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
              <Task
                tasksByProject={tasksByProject}
                deleteTaskById={deleteTaskById}
                getTasksListByCurrentProject={getTasksListByCurrentProject}
                stateTask={stateTask}
                currentTask={currentTask}
              />
            )}
          </ul>
          {buttonDeleteProject}
          <div>{selectTaskState !== null ? buttonReturnAddTask : null}</div>
        </>
      )}
    </>
  );
};

export default ListTasks;
