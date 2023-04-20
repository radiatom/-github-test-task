import { SET_DATA_LIST, SET_NAME_REPO } from "../reactRedux/Reducer";

export type DataItemType = {
  id: number;
  title: string;
  number: number;
  created_at: string;
  login: string;
  comments: number;
};
export type issuesCardType = {
  id: number;
  title: string;
  items: Array<DataItemType>;
};
export type nameRepoType = {
  owner: string;
  repo: string;
};
export type initialStateType = {
  data: Array<issuesCardType>;
  repoLink: nameRepoType | {};
};
export type setDataListType = {
  type: typeof SET_DATA_LIST;
  res: Array<issuesCardType>;
};
export type setNameRepoType = {
  type: typeof SET_NAME_REPO;
  owner: string;
  repo: string;
};
