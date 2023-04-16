import { SET_DATA_LIST } from "../reactRedux/Reducer";

export type DataItemType = {
    id: number
    title: string;
    number: number;
    created_at: string;
    login: string;
    comments: number;
}
export type issyesCardType = {
    id: number
    title: string
    items: Array<DataItemType>
}
export const defoultStateType = {
    data: Array<issyesCardType>
}
export type setDataListType = {
    type: typeof SET_DATA_LIST
    data: Array<issyesCardType>
}