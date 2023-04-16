import { appStateType } from "../reactRedux/redux"

export const issuesListsDataSelector = (state: appStateType) => {
    return state.reducer.data
}