import {
  GET_TASKS_LIST,
  GET_TASKS_LIST_BY_CURRENT_ID_PROJECT,
  ADD_NEW_TASK,
  VALIDATE_FORM_TASKS,
  DELETE_TASK,
} from "../../../types";
import { addObjProperty, addSinglePropertyObj } from "../../../utilities";

const TaskReducer = (state, action) => {
  switch (action.type) {
    case GET_TASKS_LIST:
      return {
        ...state,
        tasks: addObjProperty(action.payload),
      };
    case GET_TASKS_LIST_BY_CURRENT_ID_PROJECT:
      return {
        ...state,
        tasksByProject: state.tasks.filter(
          (task) => task.proyectoId === action.payload
        ),
      };
    case ADD_NEW_TASK:
      //console.log("Esto vale payload ", action.payload);
      const taskObj = addSinglePropertyObj(action.payload);
      return {
        ...state,
        tasks: [...state.tasks, taskObj],
        errorTask: true,
      };
    case VALIDATE_FORM_TASKS:
      return {
        ...state,
        errorTask: false,
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    default:
      return {
        state,
      };
  }
};

export default TaskReducer;
