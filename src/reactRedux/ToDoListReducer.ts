import { ThunkDispatch } from "redux-thunk"
import { getDataOpenIssues } from "../api/api"

export type issueType = {
    title: string | null
    number: number | null
    created_at: string | null
    login: string | null
    comments: number | null
}
export type setDataToDoListType = {
    type: typeof SET_DATA_TODO_LIST
    data: Array<issueType>
}
export type DataItemType = {
    title: string;
    number: number;
    created_at: string;
    login: string;
    comments: number;
}
export type dataType = Array<issueType>
export type defoultStateType = {
    data: dataType
}

const SET_DATA_TODO_LIST: string = 'ToDoListReducer/SET_DATA_TODO_LIST'
export const setDataToDoList = (res: Array<issueType>): setDataToDoListType => {
    return {
        type: SET_DATA_TODO_LIST,
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

const ToDoListReducer = (state: defoultStateType = defoultState, action: setDataToDoListType): defoultStateType => {
    switch (action.type) {
        case SET_DATA_TODO_LIST:
            return {
                ...state,
                data: action.data
            }
        default:
            return state
    }
}


export const setToDoListIssues = (owner: string, repo: string): any => async (dispatch: ThunkDispatch<defoultStateType, unknown, setDataToDoListType> ) => {
    const data = await getDataOpenIssues(owner, repo)
    if (data !== undefined) {
        const res: Array<DataItemType> = []
        for (let a = 0; a < data.length; a++) {
            if (data[a].created_at === data[a].updated_at) {
                let obj: DataItemType = {
                    title: data[a].title,
                    number: data[a].number,
                    created_at: data[a].created_at,
                    login: data[a].user.login,
                    comments: data[a].comments,
                }
                res.push(obj)
            }
        }
        dispatch(setDataToDoList(res))
    }
}
export default ToDoListReducer