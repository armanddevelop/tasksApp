import NewProjects from "../projects/NewProjects";
import ListProjects from "../projects/ListProjects";
const SideBar = () => {
  return (
    <aside>
      <h1>
        MERN <span>Task</span>
      </h1>
      <NewProjects />
      <div className="proyectos">
        <h2>Tus Proyectos</h2>
        <ListProjects />
      </div>
    </aside>
  );
};

export default SideBar;
