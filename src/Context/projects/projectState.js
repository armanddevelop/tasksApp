import React, { useReducer } from "react";
import ProjectContext from "./projectContext";
import ReducerProject from "./projectReducer";
import {
  ADD_INTO_PROJECTS_LIST,
  FORM_PROJECT,
  GET_PROJECTS_LIST,
  VALIDATE_FORM_NEW_PROJECT,
  SET_CURRENT_PROJECT,
  DELETE_PROJECT,
} from "../../types";
import { initialState } from "../../state/initialState";
import uuid from "uuid/dist/v4";

const ProjectState = (props) => {
  //Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(ReducerProject, initialState);
  const projectsList = [
    { name: "tienda Virtual", id: 1 },
    { name: "intranet", id: 2 },
    { name: "diseño de sitio web", id: 3 },
    { name: "MERN", id: 4 },
    { name: "TMOL", id: 5 },
  ];

  const _showFormProject = () => {
    dispatch({
      type: FORM_PROJECT,
    });
  };
  const _getProjectsList = () => {
    dispatch({
      type: GET_PROJECTS_LIST,
      payload: projectsList,
    });
  };
  const _addIntoProjectsList = (nameProject) => {
    nameProject.id = uuid();
    dispatch({
      type: ADD_INTO_PROJECTS_LIST,
      payload: nameProject,
    });
  };
  const _showErrorNewProjectForm = () => {
    dispatch({
      type: VALIDATE_FORM_NEW_PROJECT,
    });
  };
  const _setCurrentProject = (activeProject) => {
    dispatch({
      type: SET_CURRENT_PROJECT,
      payload: activeProject,
    });
  };
  const _deleteProject = (idToDelete) => {
    dispatch({
      type: DELETE_PROJECT,
      payload: idToDelete,
    });
  };
  //serie de funciones para el CRUD

  return (
    <ProjectContext.Provider
      value={{
        formulario: state.formulario,
        projects: state.projects,
        errorForNewProject: state.errorForNewProject,
        currentProject: state.currentProject,
        deleteProjectFlag: state.deleteProjectFlag,
        showFormProject: _showFormProject,
        getProjectsList: _getProjectsList,
        addIntoProjectsList: _addIntoProjectsList,
        showErrorNewProjectForm: _showErrorNewProjectForm,
        setCurrentProject: _setCurrentProject,
        deleteProject: _deleteProject,
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectState;
