import axios from "axios";

export const getDataOpenIssues = (owner: string, repo: string): any => {
  return axios
    .get(
      `https://api.github.com/repos/${owner}/${repo}/issues?state=open&per_page=30`
    )
    .then((res) => {
      return res.data;
    });
};

export const getDataClosedIssues = (owner: string, repo: string): any => {
  return axios
    .get(
      `https://api.github.com/repos/${owner}/${repo}/issues?state=closed&per_page=30`
    )
    .then((res) => {
      return res.data;
    });
};
