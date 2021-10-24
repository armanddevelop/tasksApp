import { CSSTransition, TransitionGroup } from "react-transition-group";
import { modifyStateTask, selectTask } from "../../utilities";
const Task = ({
  tasksByProject,
  deleteTaskById,
  getTasksListByCurrentProject,
  stateTask,
  currentTask,
}) => {
  const deleteAndGetTaskByCurrentProject = (id, idProyecto) => {
    deleteTaskById(id);
    getTasksListByCurrentProject(idProyecto);
  };
  return (
    <TransitionGroup>
      {tasksByProject.map((task) => (
        <CSSTransition key={task.id} timeout={200} classNames="tarea">
          <li className="tarea sombra">
            {task.name}
            <div className="estado">
              <button
                type="button"
                className={!task.estado ? "incompleto" : "completo"}
                onClick={() => modifyStateTask(task, stateTask)}
              >
                {!task.estado ? "Incompleto" : "Completo"}
              </button>
            </div>
            <div className="acciones">
              <button
                type="button"
                className="btn btn-primario"
                onClick={() => selectTask(task, currentTask)}
              >
                Editar
              </button>
              <button
                type="button"
                className="btn btn-secundario"
                onClick={() =>
                  deleteAndGetTaskByCurrentProject(task.id, task.proyectoId)
                }
              >
                Eliminar
              </button>
            </div>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default Task;
