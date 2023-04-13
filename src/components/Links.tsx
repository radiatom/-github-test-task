import React from 'react';


type propsType = {
    owner: string
    repo: string
}
const Links: React.FC<propsType> = ({ owner, repo }) => {
    return (
        <div >
            <a href={`https://github.com/${owner}`}>{owner}</a>
            {repo === undefined ? '' : '>'}
            <a href={`https://github.com/${owner}/${repo}`}>{repo}</a>
            number stars
        </div>
    );
}

export default Links;