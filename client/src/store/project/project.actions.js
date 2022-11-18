import { createAction } from "../../utils/reducer/reducer.utils";
import { PROJECT_ACTION_TYPES } from "./project.types";
import { gql } from "@apollo/client";

// ------------------------------------------------------------------------------

export const setCurrentProject = (project) =>
  createAction(PROJECT_ACTION_TYPES.SET_CURRENT_PROJECT, project);
// ------------------------------------------------------------------------------

export const setProjects = (projects) =>
  createAction(PROJECT_ACTION_TYPES.SET_PROJECTS, projects);
// ------------------------------------------------------------------------------
export const GET_PROJECTS = gql`
  query getProjects {
    projects {
      id
      name
      description
      status
      client {
        id
        name
      }
    }
  }
`;
