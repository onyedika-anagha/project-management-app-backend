import { createSelector } from "reselect";
const selectProjectReducer = (state) => state.project;

export const selectAllProjects = createSelector(
  [selectProjectReducer],
  (project) => project.projects
);
export const selectProject = createSelector(
  [selectProjectReducer],
  (project) => project.currentProject
);
