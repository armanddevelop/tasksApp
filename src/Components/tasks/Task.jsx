const Task = ({ tasksByProject }) => {
  const [{ name, estado }] = tasksByProject;
  return (
    <li className="tarea sombra">
      <p>{name}</p>
      <div className="estado">
        <button type="button" className={estado ? "completo" : "incompleto"}>
          {estado ? "Completo" : "Incompleto"}
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
  );
};

export default Task;
