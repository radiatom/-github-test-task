import { appStateType } from "../reactRedux/redux"

export const issueToDoListDataSelector = (state: appStateType) => {
    return state.toDoListIssues.data
}
export const issueInProgressListDataSelector = (state: appStateType) => {
    return state.inProgressListIssues.data
}
export const issueDoneListDataSelector = (state: appStateType) => {
    return state.doneListIssues.data
}