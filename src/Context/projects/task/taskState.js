import React, { useReducer } from "react";
import TaskContext from "./taskContext";
import TaskReducer from "./taskReducer";
import {
  GET_TASKS_LIST,
  GET_TASKS_LIST_BY_CURRENT_ID_PROJECT,
} from "../../../types";
import { inistialStateTask } from "../../../state/initialState";

const TaskState = (props) => {
  const [state, dispatch] = useReducer(TaskReducer, inistialStateTask);
  const tasks = [
    { name: "Elegir plataforma", estado: true, proyectoId: 1 },
    { name: "Elegir plataforma", estado: false, proyectoId: 2 },
    { name: "Elegir hosting", estado: false, proyectoId: 3 },
    { name: "Elegir colores", estado: true, proyectoId: 4 },
    { name: "Elegir plataforma", estado: true, proyectoId: 1 },
    { name: "Elegir plataforma", estado: false, proyectoId: 2 },
    { name: "Elegir hosting", estado: false, proyectoId: 3 },
    { name: "Elegir colores", estado: true, proyectoId: 4 },
    { name: "Elegir plataforma", estado: true, proyectoId: 1 },
    { name: "Elegir plataforma", estado: false, proyectoId: 2 },
    { name: "Elegir hosting", estado: false, proyectoId: 3 },
    { name: "Elegir colores", estado: true, proyectoId: 4 },
  ];

  const _getTaskList = () => {
    dispatch({
      type: GET_TASKS_LIST,
      payload: tasks,
    });
  };
  const _getTasksListByCurrentProject = (idProject) => {
    dispatch({
      type: GET_TASKS_LIST_BY_CURRENT_ID_PROJECT,
      payload: idProject,
    });
  };
  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        tasksByProject: state.tasksByProject,
        getTaskList: _getTaskList,
        getTasksListByCurrentProject: _getTasksListByCurrentProject,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
