import { getData } from "../api/api"

export type issueType = {
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
type DataItemType = {
    title: string;
    number: number;
    created_at: string;
    login: string;
    comments: number;
}
const SET_DATA: string = 'ToDoListReducer/SET_DATA'
export const setData = (res: Array<issueType>): setDataType => {
    return {
        type: SET_DATA,
        data: res
    }
}
export type dataType = Array<issueType>
export type defoultStateType = {
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


    if (data !== undefined) {
        const res: Array<DataItemType> = []
        // console.log(res)
        for (let a = 0; a < data.length; a++) {
            let obj: DataItemType = {
                title: data[a].title,
                number: data[a].number,
                created_at: data[a].created_at,
                login: data[a].user.login,
                comments: data[a].comments,
            }
            res.push(obj)
        }
        // console.log(res)
        //@ts-ignore
        dispatch(setData(res))
    }


}
export default ToDoListReducer