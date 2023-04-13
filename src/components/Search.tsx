import React, { useState } from 'react';
import Links from './Links';



const Search = (props: any) => {
    const [value, setValue] = useState('')
    const handleChange = (event: any) => {
        setValue(event.target.value);
    }
    
    const splitUrlOwer = value.split('/')
    const owner = splitUrlOwer[3]

    const splitUrlRepo = value.split('/')
    const repo = splitUrlRepo[4]

    return (
        <div >
            <input type="text" value={value} onChange={handleChange} />
            <button>Load issues</button>
            <Links owner={owner} repo={repo}/>
        </div>
    );
}

export default Search;






