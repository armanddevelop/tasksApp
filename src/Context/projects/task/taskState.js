import React, { useReducer } from "react";
import TaskContext from "./taskContext";
import TaskReducer from "./taskReducer";
import {
  GET_TASKS_LIST,
  GET_TASKS_LIST_BY_CURRENT_ID_PROJECT,
  ADD_NEW_TASK,
  VALIDATE_FORM_TASKS,
  DELETE_TASK,
} from "../../../types";
import { inistialStateTask } from "../../../state/initialState";

const TaskState = (props) => {
  const [state, dispatch] = useReducer(TaskReducer, inistialStateTask);
  const tasks = [
    { name: "Elegir plataforma", estado: true, proyectoId: 1 },
    { name: "Elegir plataforma", estado: false, proyectoId: 2 },
    { name: "Elegir hosting", estado: false, proyectoId: 3 },
    { name: "Elegir colores", estado: true, proyectoId: 4 },
    { name: "Elegir plataforma", estado: true, proyectoId: 5 },
    { name: "Elegir plataforma", estado: false, proyectoId: 2 },
    { name: "Elegir hosting", estado: false, proyectoId: 3 },
    { name: "Elegir colores", estado: true, proyectoId: 4 },
    { name: "Elegir plataforma", estado: true, proyectoId: 1 },
    { name: "Elegir plataforma", estado: false, proyectoId: 2 },
    { name: "Elegir hosting", estado: false, proyectoId: 3 },
    { name: "Elegir colores", estado: true, proyectoId: 5 },
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
  const _addNewTask = (newTask) => {
    console.log("Esto vale el new task ", newTask);
    dispatch({
      type: ADD_NEW_TASK,
      payload: newTask,
    });
  };
  const _errorTask = () => {
    dispatch({
      type: VALIDATE_FORM_TASKS,
    });
  };
  const _deleteTaskById = (idTask) => {
    console.log("esto vale idTask ", idTask);
    dispatch({
      type: DELETE_TASK,
      payload: idTask,
    });
  };
  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        tasksByProject: state.tasksByProject,
        errorTask: state.errorTask,
        getTaskList: _getTaskList,
        getTasksListByCurrentProject: _getTasksListByCurrentProject,
        addNewTask: _addNewTask,
        errorTaskFun: _errorTask,
        deleteTaskById: _deleteTaskById,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
