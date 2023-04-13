import React from 'react';
import { issueType } from '../reactRedux/ToDoListReducer';

type propsType = {
    el: issueType
}

const Issue = (props: propsType) => {
    return (
        <div >
            <p>{props.el.title}</p>
            <p>#{props.el.number} create {props.el.created_at}</p>
            <p>{props.el.login} | coments: {props.el.comments}</p>
        </div>
    );
}

export default Issue;