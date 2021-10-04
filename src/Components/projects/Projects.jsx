import SideBar from "../layout/SideBar";
import Bar from "../layout/Bar";
import FormTask from "../tasks/FormTask";
import ListTasks from "../tasks/ListTasks";
const Projects = () => {
  return (
    <div className="contenedor-app">
      <SideBar />
      <div className="seccion-principal">
        <Bar />
        <main>
          <FormTask />
          <div className="contenedor-tareas">
            <ListTasks />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Projects;
