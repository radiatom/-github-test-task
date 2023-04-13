import React from 'react';


type propsType = {
    owner: string
    repo: string
}
const Links: React.FC<propsType> = ({ owner, repo }) => {
    return (
        <div >
            <a href={`https://github.com/${owner}`} target="_blank" rel="noopener noreferrer">{owner}</a>
            {repo === undefined ? '' : '>'}
            <a href={`https://github.com/${owner}/${repo}`} target="_blank" rel="noopener noreferrer">{repo}</a>
            {repo === undefined ? '' : 'number stars'}
        </div>
    );
}

export default Links;