import { ThunkDispatch } from "redux-thunk"
import { getDataClosedIssues, getDataOpenIssues } from "../api/api"
import { DataItemType, issyesCardType, setDataListType, defoultStateType } from "../Types/types"


export const SET_DATA_LIST: string = 'Reducer/SET_DATA_LIST'

export const setDataList = (res: Array<issyesCardType>): setDataListType => {
    return {
        type: SET_DATA_LIST,
        data: res
    }
}

const defoultState: defoultStateType = {
    data: []
}

const Reducer = (state: defoultStateType = defoultState, action: setDataListType) => {
    switch (action.type) {
        case SET_DATA_LIST:
            return {
                ...state,
                data: action.data
            }
        default:
            return state
    }
}

export const setListIssues = (owner: string, repo: string): any => async (dispatch: ThunkDispatch<defoultStateType, unknown, setDataListType>) => {
    let id: number = 1

    const dataIssue = await getDataOpenIssues(owner, repo)
    const issuesOpen: Array<DataItemType> = []
    if (dataIssue !== undefined) {
        for (let a = 0; a < dataIssue.length; a++) {
            if (dataIssue[a].created_at === dataIssue[a].updated_at) {
                let obj: DataItemType = {
                    id: id,
                    title: dataIssue[a].title,
                    number: dataIssue[a].number,
                    created_at: dataIssue[a].created_at,
                    login: dataIssue[a].user.login,
                    comments: dataIssue[a].comments,
                }
                issuesOpen.push(obj)
                id++
            }
        }
    }

    const issuesInProgress: Array<DataItemType> = []
    if (dataIssue !== undefined) {
        for (let a = 0; a < dataIssue.length; a++) {
            if (dataIssue[a].created_at !== dataIssue[a].updated_at) {
                let obj: DataItemType = {
                    id: id,
                    title: dataIssue[a].title,
                    number: dataIssue[a].number,
                    created_at: dataIssue[a].created_at,
                    login: dataIssue[a].user.login,
                    comments: dataIssue[a].comments,
                }
                issuesInProgress.push(obj)
                id++
            }
        }
    }

    const DataClosedIssues = await getDataClosedIssues(owner, repo)
    const issuesDone: Array<DataItemType> = []
    if (DataClosedIssues !== undefined) {
        for (let a = 0; a < DataClosedIssues.length; a++) {
            let obj: DataItemType = {
                id: id,
                title: DataClosedIssues[a].title,
                number: DataClosedIssues[a].number,
                created_at: DataClosedIssues[a].closed_at,
                login: DataClosedIssues[a].user.login,
                comments: DataClosedIssues[a].comments,
            }
            issuesDone.push(obj)
            id++
        }
    }

    const res: Array<issyesCardType> = []
    const issuesOpenCard: issyesCardType = { id: 1, title: "ToDo", items: issuesOpen }
    res.push(issuesOpenCard)
    const issuesInProgressCard: issyesCardType = { id: 2, title: "In Progress", items: issuesInProgress }
    res.push(issuesInProgressCard)
    const issuesDoneCard: issyesCardType = { id: 3, title: "Done", items: issuesDone }
    res.push(issuesDoneCard)

    dispatch(setDataList(res))
}
export default Reducer