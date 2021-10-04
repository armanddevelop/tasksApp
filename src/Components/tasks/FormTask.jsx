import { useContext } from "react";
import ProjectContext from "../../Context/projects/projectContext";
const FormTask = () => {
  const projectsContext = useContext(ProjectContext);
  const { currentProject, deleteProjectFlag } = projectsContext;
  return (
    <div className="formulario">
      {currentProject.length !== 0 && !deleteProjectFlag && (
        <form>
          <div className="contenedor-input">
            <input
              type="text"
              className="input-text"
              placeholder="Nombre Tarea"
              name="name"
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
    </div>
  );
};

export default FormTask;
