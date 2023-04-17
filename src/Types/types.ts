import { SET_DATA_LIST } from "../reactRedux/Reducer";

export type DataItemType = {
    id: number
    title: string;
    number: number;
    created_at: string;
    login: string;
    comments: number;
}
export type issuesCardType = {
    id: number
    title: string
    items: Array<DataItemType>
}
export type defoultStateType = {
    data: Array<issuesCardType>
}
export type setDataListType = {
    type: typeof SET_DATA_LIST
    res: Array<issuesCardType>
}