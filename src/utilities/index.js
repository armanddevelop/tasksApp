import uuid from "uuid/dist/v4";

export const findDuplicateProject = (nameProject, listProject) => {
  let duplicateNameProject = false;
  for (const iterator of listProject) {
    if (iterator.name.toLowerCase() === nameProject.toLowerCase()) {
      duplicateNameProject = true;
    }
  }
  return duplicateNameProject;
};

export const addObjProperty = (arrObj) => {
  for (const task of arrObj) {
    if (!task.hasOwnProperty("id")) {
      task.id = uuid();
    }
  }
  return arrObj;
};
export const addSinglePropertyObj = (obj) => {
  if (!obj.hasOwnProperty("id")) {
    obj.id = uuid();
  }

  return obj;
};
export const modifyStateTask = (task, modifyStateTask) => {
  task.estado ? (task.estado = false) : (task.estado = true);
  modifyStateTask(task);
};
export const selectTask = (task, currentTask) => {
  currentTask(task);
};
