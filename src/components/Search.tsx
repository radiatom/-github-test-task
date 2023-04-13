import React, { useState } from 'react';
import Links from './Links';
import { useDispatch } from 'react-redux';
import { setToDoListIssues } from '../reactRedux/ToDoListReducer';



const Search = (props: any) => {
    const [value, setValue] = useState('')
    const handleChange = (event: any) => {
        setValue(event.target.value);
    }
    
    const splitUrlOwer = value.split('/')
    const owner = splitUrlOwer[3]

    const splitUrlRepo = value.split('/')
    const repo = splitUrlRepo[4]

    const dispatch = useDispatch()
    const click=()=>{
        dispatch(setToDoListIssues(owner,repo))
    }
    return (
        <div >
            <input type="text" value={value} onChange={handleChange} />
            <button onClick={click}>Load issues</button>
            <Links owner={owner} repo={repo}/>
            https://github.com/facebook/react
        </div>
    );
}

export default Search;






