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

export const setDoneListIssues = (owner: string, repo: string) => async (dispatch: setDataDoneListType) => {
    const data = await getDataClosedIssues(owner, repo)
    if (data !== undefined) {
        const res: Array<DataItemType> = []
        for (let a = 0; a < data.length; a++) {
            let obj: DataItemType = {
                title: data[a].title,
                number: data[a].number,
                created_at: data[a].closed_at,
                login: data[a].user.login,
                comments: data[a].comments,
            }
            res.push(obj)
        }
        //@ts-ignore
        dispatch(setDataDoneList(res))
    }
}

export default DoneListReducer