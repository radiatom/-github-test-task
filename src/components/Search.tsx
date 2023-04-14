import React, { useState } from 'react';
import Links from './Links';
import { useDispatch } from 'react-redux';
import { setToDoListIssues } from '../reactRedux/ToDoListReducer';
import { setInProgressListIssues } from '../reactRedux/InProgressListReducer';



const Search = (props: any) => {
    const [value, setValue] = useState('')
    const handleChange = (event: any) => {
        setValue(event.target.value);
    }
    const [look, setLook] = useState(false)
    const openLink = () => {
        setLook(!look);
    }
    const splitUrlOwer = value.split('/')
    const owner = splitUrlOwer[3]

    const splitUrlRepo = value.split('/')
    const repo = splitUrlRepo[4]

    const dispatch = useDispatch()
    const click = () => {
        //@ts-ignore
        dispatch(setToDoListIssues(owner, repo))
        //@ts-ignore
        dispatch(setInProgressListIssues(owner, repo))
        openLink()
    }
    return (
        <div >
            <input placeholder="Enter repo URL" type="text" value={value} onChange={handleChange} />
            <button onClick={click}>Load issues</button>
            {look ?
                <Links owner={owner} repo={repo} />
                :
                null}
            https://github.com/facebook/react
        </div>
    );
}

export default Search;






