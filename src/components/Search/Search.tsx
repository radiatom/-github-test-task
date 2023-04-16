import React, { useState } from 'react';
import Links from './Links/Links';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form'
import { Container } from 'react-bootstrap';
import { setListIssues } from '../../reactRedux/Reducer';


const Search = () => {
    const [value, setValue] = useState('')
    const handleChange = (event: any) => {
        setValue(event.target.value);
    }
    const [look, setLook] = useState(false)
    const openLink = () => {
        setLook(true);
    }
    const splitUrlOwer = value.split('/')
    const owner = splitUrlOwer[3]

    const splitUrlRepo = value.split('/')
    const repo = splitUrlRepo[4]

    const dispatch = useDispatch()
    const click = () => {
        dispatch(setListIssues(owner, repo))
        openLink()
    }
    return (
        <div>
            <Container className='text-center p-0 mt-5 d-flex align-items-center' >
                <Form.Label htmlFor="disabledTextInput" className="flex-grow-1"><input className="w-100 mt-2" placeholder="Enter repo URL" type="text" value={value} onChange={handleChange} /></Form.Label>

                <button className='m-2' onClick={click}>Load issues</button>

            </Container>
            <Container className='p-0'>
                {look ?
                    <Links owner={owner} repo={repo} />
                    :
                    null}
            <p>https://github.com/facebook/react</p>
            </Container>
        </div>
    );
}

export default Search;






