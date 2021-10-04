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

export const addObjProperty = (obj) => {
  for (const task of obj) {
    if (!task.hasOwnProperty("id")) {
      task.id = uuid();
    }
  }
  return obj;
};
