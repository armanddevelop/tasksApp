const Project = ({
  projectInfo,
  setCurrentProject,
  getTasksListByCurrentProject,
}) => {
  const { name, id } = projectInfo;
  const showTasksAndProjectById = (idProject) => {
    setCurrentProject(idProject);
    getTasksListByCurrentProject(idProject);
  };
  return (
    <li>
      <button
        type="button"
        className="btn btn-black"
        name={name}
        onClick={() => showTasksAndProjectById(id)}
      >
        {name}
      </button>
    </li>
  );
};

export default Project;
