import { getData } from "../api/api"

type issueType = {
    title: string | null
    number: number | null
    created_at: string | null
    login: string | null
    comments: number | null
}
type setDataType = {
    type: typeof SET_DATA
    data: Array<issueType>
}

const SET_DATA: string = 'ToDoListReducer/SET_DATA'
export const setData = (res: Array<issueType>): setDataType => {
    return {
        type: SET_DATA,
        data: res
    }
}
type dataType = Array<issueType>
type defoultStateType = {
    data: dataType
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

const ToDoListReducer = (state: defoultStateType = defoultState, action: setDataType): defoultStateType => {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                data: action.data
            }
        default:
            return state
    }
}


export const setToDoListIssues = (owner: string, repo: string) => async (dispatch: setDataType) => {
    const data = await getData(owner, repo)
    const res = []
    for (let a = 0; a <= data.length; a++) {
        res.push({
            title: data[a].title,
            number: data[a].number,
            created_at: data[a].created_at,
            login: data[a].user.login,
            comments: data[a].comments
        })
    }
    //@ts-ignore
    dispatch(setData(res))

}
export default ToDoListReducer