import { ThunkDispatch } from "redux-thunk"
import { getDataClosedIssues } from "../api/api"
import { DataItemType, defoultStateType, issueType } from "./ToDoListReducer"


export type setDataDoneListType = {
    type: typeof SET_DATA_DONE_LIST
    data: Array<issueType>
}


const SET_DATA_DONE_LIST: string = 'DoneListReducer/SET_DATA_DONE_LIST'
export const setDataDoneList = (res: Array<issueType>): setDataDoneListType => {
    return {
        type: SET_DATA_DONE_LIST,
        data: res
    }
}
const defoultState: defoultStateType = {
    data: []
}
const DoneListReducer = (state: defoultStateType = defoultState, action: setDataDoneListType): defoultStateType => {
    switch (action.type) {
        case SET_DATA_DONE_LIST:
            return {
                ...state,
                data: action.data
            }
        default:
            return state
    }
}

export const setDoneListIssues = (owner: string, repo: string): any => async (dispatch: ThunkDispatch<defoultStateType, unknown, setDataDoneListType>) => {
    const data = await getDataClosedIssues(owner, repo)
    if (data !== undefined) {
        const res: Array<DataItemType> = []
        for (let a = 0; a < data.length; a++) {
            let obj: DataItemType = {
                id:a+1,
                title: data[a].title,
                number: data[a].number,
                created_at: data[a].closed_at,
                login: data[a].user.login,
                comments: data[a].comments,
            }
            res.push(obj)
        }
        dispatch(setDataDoneList(res))
    }
}

export default DoneListReducer