//@ts-ignore
import axios from "axios"

//@ts-ignore
// const instance = axios.create({
//     withCredentials: true,
//     baseURL: `https://api.github.com/repos/`
// })
// export const getData = (owner: string, repo: string) => {
//     return instance.get(`${owner}/${repo}`)
//     //@ts-ignore
//         .then(response => {
//             return response.data
//         })
// }
export const getData = (owner: string, repo: string) => {
    return axios.get(`https://api.github.com/repos/${owner}/${repo}/issues`)
        .then((res) => {
            return res.data
        })
}