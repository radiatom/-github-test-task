import { defoultStateType } from "../reactRedux/ToDoListReducer"

export const issueToDoListDataSelector = (state: any) => {
    return state.toDoListIssues.data
}
export const issueInProgressListDataSelector = (state: any) => {
    return state.inProgressListIssues.data
}