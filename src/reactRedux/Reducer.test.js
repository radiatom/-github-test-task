import React from "react";
import Reducer, { setDataList, setListIssues, setNameRepo } from "./Reducer";

it("setDataList add new state", () => {
  const res = [
    {
      id: 2,
      title: "fdgdf",
      items: [],
    },
  ];
  setDataList(res);
  const initialState = {
    data: [],
    repoLink: {},
  };
  const newState = Reducer(initialState, setDataList(res));
  expect(newState.data[0].id).toBe(2);
});

it("setDataList add new state", () => {
  const state = {
    data: [],
    repoLink: {},
  };
  const newState = Reducer(state, setNameRepo("facebook", "react"));
  expect(newState.repoLink.owner).toBe("facebook");
});

// it('setDataList add new state', async () => {
//     const initialState = {
//         data: [],
//         repoLink: {}
//     }
//     const newState = await Reducer(initialState, setListIssues('facebook', 'react'));
//     expect(newState.data.length>1).toBe(true)
// })
