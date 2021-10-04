import {
  GET_TASKS_LIST,
  GET_TASKS_LIST_BY_CURRENT_ID_PROJECT,
} from "../../../types";
import { addObjProperty } from "../../../utilities";

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
    default:
      return {
        state,
      };
  }
};

export default TaskReducer;
