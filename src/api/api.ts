import axios from "axios"


export const getDataOpenIssues = (owner: string, repo: string) => {
    return axios.get(`https://api.github.com/repos/${owner}/${repo}/issues?state=open&per_page=100`)
        .then((res) => {
            return res.data
        })
}

export const getDataInClosedIssues = (owner: string, repo: string) => {
    return axios.get(`https://api.github.com/repos/${owner}/${repo}/issues?state=closed&per_page=100`)
        .then((res) => {
            return res.data
        })
}