import { useState } from "react";
import { findDuplicateProject } from "../../../utilities";
const NewProjectForm = ({
  nameNewProject,
  projects,
  showErrorNewProjectForm,
}) => {
  const [projectName, setProjectName] = useState({
    name: "",
  });
  const { name } = projectName;
  const handleProjectName = (e) => {
    setProjectName({
      ...projectName,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmitProject = (e) => {
    e.preventDefault();
    if (name === "") {
      return showErrorNewProjectForm();
    }
    let duplicateNameProject = findDuplicateProject(name, projects);
    if (!duplicateNameProject) {
      nameNewProject(projectName);
    }
    setProjectName({
      name: "",
    });
  };
  return (
    <form onSubmit={handleSubmitProject} className="formulario-nuevo-proyecto">
      <input
        type="text"
        className="input-text"
        placeholder="Nombre Del Proyecto"
        name="name"
        onChange={handleProjectName}
        value={name}
      />
      <input
        type="submit"
        className="btn btn-primario btn-block"
        value="Agregar Proyecto"
      />
    </form>
  );
};

export default NewProjectForm;
