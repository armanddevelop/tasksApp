import { useContext, useState } from "react";
import ProjectContext from "../../Context/projects/projectContext";
import TaskContext from "../../Context/projects/task/taskContext";
const FormTask = () => {
  const projectsContext = useContext(ProjectContext);
  const taskContext = useContext(TaskContext);
  const { currentProject, deleteProjectFlag } = projectsContext;
  const { addNewTask, errorTaskFun, errorTask, getTasksListByCurrentProject } =
    taskContext;

  const [nameTask, setNameTask] = useState({
    name: "",
  });
  const { name } = nameTask;
  const handleChange = (e) => {
    setNameTask({
      ...nameTask,
      [e.target.name]: e.target.value,
    });
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    const [{ id }] = currentProject;
    if (name.trim() === "") {
      return errorTaskFun();
    }
    nameTask.estado = true;
    nameTask.proyectoId = id;

    addNewTask(nameTask);
    setNameTask({
      name: "",
    });
    getTasksListByCurrentProject(id);
  };
  return (
    <div className="formulario">
      {currentProject.length !== 0 && !deleteProjectFlag && (
        <form onSubmit={onHandleSubmit}>
          <div className="contenedor-input">
            <input
              type="text"
              className="input-text"
              placeholder="Nombre Tarea"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </div>
          <div className="contenedor-input">
            <input
              type="submit"
              className="btn btn-primario btn-submit btn-block"
              value="Agregar tarea"
            />
          </div>
        </form>
      )}
      {!errorTask && (
        <p className="mensaje error">El nombre de la tarea es obligatorio</p>
      )}
    </div>
  );
};

export default FormTask;
