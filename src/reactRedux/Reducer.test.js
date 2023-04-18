import React from 'react'
import Reducer, { setDataList } from './Reducer'

it('setDataList add new state', () => {
    const res = [{
        id: 2,
        title: 'fdgdf',
        items: []
    }
    ]
    setDataList(res)
    const state = {
        data: []
    }
    const newState = Reducer(state, setDataList(res))
    expect(newState.data[0].id).toBe(2)
})

