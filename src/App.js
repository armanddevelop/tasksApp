import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/auth/Login";
import NewAccount from "./Components/auth/NewAccount";
import Projects from "./Components/projects/Projects";
import ProjectState from "./Context/projects/projectState";
import TaskState from "./Context/projects/task/taskState";
function App() {
  return (
    <ProjectState>
      <TaskState>
        <Router>
          <Switch>
            <Route exact path={"/"} component={Login} />
            <Route exact path={"/nueva-cuenta"} component={NewAccount} />
            <Route exact path={"/proyectos"} component={Projects} />
          </Switch>
        </Router>
      </TaskState>
    </ProjectState>
  );
}

export default App;
