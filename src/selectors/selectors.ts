import { appStateType } from "../reactRedux/redux";

export const issuesListsDataSelector = (state: appStateType) => {
  return state.reducer.data;
};
export const nameRepoSelector = (state: appStateType) => {
  return state.reducer.repoLink;
};
