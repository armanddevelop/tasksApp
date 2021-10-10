const Task = ({ tasksByProject }) => {
  return tasksByProject.map((task) => (
    <li className="tarea sombra" key={task.id}>
      {task.name}
      <div className="estado">
        <button
          type="button"
          className={!task.estado ? "incompleto" : "completo"}
        >
          {!task.estado ? "Incompleto" : "Completo"}
        </button>
      </div>
      <div className="acciones">
        <button type="button" className="btn btn-primario">
          Editar
        </button>
        <button type="button" className="btn btn-secundario">
          Eliminar
        </button>
      </div>
    </li>
  ));
};

export default Task;
