import { ThunkDispatch } from "redux-thunk"
import { getDataOpenIssues } from "../api/api"
import { DataItemType, defoultStateType, issueType } from "./ToDoListReducer"

export type setDataInProgressListType = {
    type: typeof SET_DATA_IN_PROGRESS_LIST
    data: Array<issueType>
}

const SET_DATA_IN_PROGRESS_LIST: string = 'InProgressListReducer/SET_DATA_IN_PROGRESS_LIST'
export const setDataInProgressList = (res: Array<issueType>): setDataInProgressListType => {
    return {
        type: SET_DATA_IN_PROGRESS_LIST,
        data: res
    }
}
const defoultState: defoultStateType = {
    data: [
        {
            title: null,
            number: null,
            created_at: null,
            login: null,
            comments: null
        }
    ]
}
const InProgressListReducer = (state: defoultStateType = defoultState, action: setDataInProgressListType): defoultStateType => {
    switch (action.type) {
        case SET_DATA_IN_PROGRESS_LIST:
            return {
                ...state,
                data: action.data
            }
        default:
            return state
    }
}

export const setInProgressListIssues = (owner: string, repo: string): any => async (dispatch: ThunkDispatch<defoultStateType, unknown, setDataInProgressListType>) => {
    const data = await getDataOpenIssues(owner, repo)
    if (data !== undefined) {
        const res: Array<DataItemType> = []
        for (let a = 0; a < data.length; a++) {
            if (data[a].created_at !== data[a].updated_at) {
                let obj: DataItemType = {
                    title: data[a].title,
                    number: data[a].number,
                    created_at: data[a].updated_at,
                    login: data[a].user.login,
                    comments: data[a].comments,
                }
                res.push(obj)
            }
        }
        dispatch(setDataInProgressList(res))
    }
}


export default InProgressListReducer