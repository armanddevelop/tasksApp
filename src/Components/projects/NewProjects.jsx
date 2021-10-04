import { useContext } from "react";
import ProjectContext from "../../Context/projects/projectContext";
import NewProjectForm from "./Forms/NewProjectForm";
const NewProjects = () => {
  //obtener el state del formulario
  const projectsContext = useContext(ProjectContext);
  const {
    formulario,
    showFormProject,
    projects,
    addIntoProjectsList,
    showErrorNewProjectForm,
    errorForNewProject,
  } = projectsContext;
  const nameNewProject = (nameProject) => {
    addIntoProjectsList(nameProject);
  };
  return (
    <>
      <button
        onClick={showFormProject}
        type="button"
        className="btn btn-block btn-primario"
      >
        Nuevo proyecto
      </button>
      {formulario ? (
        <NewProjectForm
          nameNewProject={nameNewProject}
          projects={projects}
          showErrorNewProjectForm={showErrorNewProjectForm}
        />
      ) : null}
      {errorForNewProject ? (
        <p className="mensaje error">El nombre del proyecto es obligatorio</p>
      ) : null}
    </>
  );
};

export default NewProjects;
