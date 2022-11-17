import { createSlice } from "@reduxjs/toolkit";
import { projects } from "../../utils/initial-state/states";

const projectSlice = createSlice({
  name: "project",
  initialState: {
    projects: projects,
    currentProject: null,
  },
  reducers: {
    setProjects(state, action) {
      state.projects = action.payload;
    },
    setCurrentProject(state, action) {
      state.currentProject = action.payload;
    },
  },
});

export const projectActions = projectSlice.actions;
export default projectSlice;
