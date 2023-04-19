import React, { useState } from 'react';
import Links from './Links/Links';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form'
import { Container } from 'react-bootstrap';
import { setListIssues, setNameRepo } from '../../reactRedux/Reducer';
import { useSelector } from 'react-redux';
import { nameRepoSelector } from '../../selectors/selectors';
import { nameRepoType } from '../../Types/types';


const Search = () => {
    const [value, setValue] = useState('')
    const handleChange = (event: any) => {
        setValue(event.target.value);
    }
    const repoName = useSelector(nameRepoSelector) as nameRepoType

    const splitUrlOwer = value.split('/')
    const owner = splitUrlOwer[3]

    const splitUrlRepo = value.split('/')
    const repo = splitUrlRepo[4]

    const dispatch = useDispatch()
    const click = () => {
        dispatch(setNameRepo(owner, repo))
        dispatch(setListIssues(owner, repo))
        setValue('')
    }
    return (
        <div>
            <Container className='text-center p-0 mt-5 d-flex align-items-center' >
                <Form.Label htmlFor="disabledTextInput" className="flex-grow-1">
                    <input className="w-100 mt-2" placeholder="Enter repo URL" type="text" value={value} onChange={handleChange} />
                </Form.Label>
                <button className='m-2' onClick={click}>Load issues</button>
            </Container>
            <Container className='p-0'>
                {repoName.owner === undefined ?
                    null
                    :
                    <Links owner={repoName.owner} repo={repoName.repo} />
                }
                <p>https://github.com/facebook/react</p>
                <p>https://github.com/facebook/react-native</p>
            </Container>
        </div>
    );
}

export default Search;






