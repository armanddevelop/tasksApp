import {
  FORM_PROJECT,
  GET_PROJECTS_LIST,
  ADD_INTO_PROJECTS_LIST,
  VALIDATE_FORM_NEW_PROJECT,
  SET_CURRENT_PROJECT,
  DELETE_PROJECT,
} from "../../types";

const ReducerProject = (state, action) => {
  switch (action.type) {
    case FORM_PROJECT:
      return {
        ...state,
        formulario: true,
      };
    case GET_PROJECTS_LIST:
      return {
        ...state,
        projects: action.payload,
      };
    case ADD_INTO_PROJECTS_LIST:
      return {
        ...state,
        projects: [action.payload, ...state.projects],
        formulario: false,
        errorForNewProject: false,
      };
    case VALIDATE_FORM_NEW_PROJECT:
      return {
        ...state,
        errorForNewProject: true,
      };
    case SET_CURRENT_PROJECT:
      return {
        ...state,
        currentProject: state.projects.filter(
          (project) => project.id === action.payload
        ),
        deleteProjectFlag: false,
      };
    case DELETE_PROJECT:
      const newProjectList = state.projects.filter(
        (project) => project.id !== action.payload
      );
      return {
        ...state,
        projects: newProjectList,
        deleteProjectFlag: true,
      };
    default:
      break;
  }
};
export default ReducerProject;
